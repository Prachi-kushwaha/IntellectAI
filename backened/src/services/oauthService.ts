import {Request, Response} from "express"
import {prisma} from "../../lib/prisma"
import { SHOPIFY_READ_SCOPES } from "../utils/scopes"
import { verifyShopifyHmac } from "../utils/Hmac"

function normalizeShopDomain(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")   // 🔥 removes https:// or http://
    .replace(/^www\./, "")
    .replace(/\/$/, "")
}



export const saveStoreInfo = async (req: Request, res: Response) => {
  let {storeName, storeDomain } = req.body
  const userId = req.user!.id

  if (!storeName || !storeDomain) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  storeDomain = normalizeShopDomain(storeDomain)
  const existingStore = await prisma.shopifyStore.findUnique({
    where: { storeDomain },
  })

  if (existingStore) {
    return res.status(409).json({ error: "Store already exists" })
  }

  const store = await prisma.shopifyStore.create({
    data: {
      storeName,
      storeDomain,
      userId,
      scopes:""
    },
  })

  res.status(201).json(store)
}


// GET /api/shopify/auth-url?shop=example.myshopify.com
export const getShopifyAuthUrl = (req: Request, res: Response) => {
  let { shop } = req.query
  console.log(shop)

  if (!shop || typeof shop !== "string") {
    return res.status(400).json({ error: "Invalid shop domain" })
  }
  shop = normalizeShopDomain(shop)

  const redirectUri = encodeURIComponent(
    "http://localhost:3000/shopify/callback"
  )

const state = crypto.randomUUID()


const scopes = SHOPIFY_READ_SCOPES.join(",")

  // TODO: save state in DB mapped to storeDomain

  const authUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&scope=${scopes}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${state}`


  res.json({ authUrl })
  console.log(authUrl)
}

export const shopifyCallback = async (req: Request, res: Response) => {
  // 🔐 1. Verify HMAC FIRST
  const isValid = verifyShopifyHmac(
    req.query as Record<string, any>,
    process.env.ClENT_SECRET_KEY!
  )

  if (!isValid) {
    return res.status(401).send("Invalid HMAC")
  }

  let { shop, code } = req.query

  if (!shop || typeof shop !== "string" || !code) {
    return res.status(400).send("Missing shop or code")
  }

  shop = normalizeShopDomain(shop)

  // 🔁 2. Exchange code → token
  const tokenRes = await fetch(
    `https://${shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.ClENT_ID,
        client_secret: process.env.ClENT_SECRET_KEY,
        code,
      }),
    }
  )

  if (!tokenRes.ok) {
    const error = await tokenRes.text()
    return res.status(400).send(error)
  }

  const { access_token, scope } = await tokenRes.json()

  // 💾 3. Save token
  await prisma.shopifyStore.update({
    where: { storeDomain: shop },
    data: {
      accessToken: access_token,
      scopes: scope,
    },
  })

  // 🔄 4. Redirect user
  res.redirect("http://localhost:5173/dashboard")
}


