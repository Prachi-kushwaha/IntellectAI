import express from "express"
import { saveStoreInfo } from "../services/oauthService"
import { AuthMiddleware } from "../middlewares/oauth.middleware"
import { getShopifyAuthUrl } from "../services/oauthService"
import { shopifyCallback } from "../services/oauthService"

const router = express.Router()

router.post("/mcp", AuthMiddleware,  saveStoreInfo)
router.get("/auth-url", AuthMiddleware,  getShopifyAuthUrl)
router.get("/callback", AuthMiddleware,  shopifyCallback)

export default router