import {Request, Response} from "express"
import {prisma} from "../../lib/prisma"


export const saveStoreInfo = async (req: Request, res: Response) => {
  const { storeName, storeDomain } = req.body
  const userId = req.user!.id

  if (!storeName || !storeDomain) {
    return res.status(400).json({ error: "Missing required fields" })
  }

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
      scopes: [
        "read_products",
        "read_orders",
        "read_customers",
        "read_inventory",
        "read_discounts",
      ],
    },
  })

  res.status(201).json(store)
}


// GET /api/shopify/auth-url?shop=example.myshopify.com
export const getShopifyAuthUrl = (req: Request, res: Response) => {
  const { shop } = req.query

  if (!shop || typeof shop !== "string" || !shop.endsWith(".myshopify.com")) {
    return res.status(400).json({ error: "Invalid shop domain" })
  }

  const redirectUri = encodeURIComponent(
    "https://api.yoursite.com/api/shopify/callback"
  )

  const scopes = "read_products,read_orders,read_customers,read_inventory"
  const state = crypto.randomUUID()

  // TODO: save state in DB mapped to storeDomain

  const authUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${process.env.SHOPIFY_API_KEY}` +
    `&scope=${scopes}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${state}`

  res.json({ authUrl })
}


export const shopifyCallback = async (req: Request, res: Response) => {
  const { shop, code } = req.query

  if (!shop || !code) {
    return res.status(400).send("Missing shop or code")
  }

  // Exchange code → token
  const tokenRes = await fetch(
    `https://${shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.SHOPIFY_API_KEY,
        client_secret: process.env.SHOPIFY_API_SECRET,
        code,
      }),
    }
  )

  const { access_token, scope } = await tokenRes.json()

  // Update existing store
  await prisma.shopifyStore.update({
    where: { storeDomain: shop as string },
    data: {
      accessToken: access_token,
      scopes: scope.split(","), // IMPORTANT
    },
  })

  // Redirect back to frontend
  res.redirect("http://localhost:5173/dashboard")
}

