import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import crypto from "crypto";

export const ShopifyStoreInfo = async (req:Request, res:Response)=>{
    const {shop} = req.params;

    if (!shop || !/\.myshopify\.com$/.test(shop as string)) {
    return res.status(400).send("Invalid shop domain");
    }

    const state = crypto.randomBytes(16).toString("hex");
    const redirectUri = "http://localhost:3000/shopify/callback";
    const scopes = "read_products,read_orders";
    const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${process.env.SHOPIFY_API_KEY}` +
    `&scope=${scopes}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}`; 

  res.redirect(installUrl);


}