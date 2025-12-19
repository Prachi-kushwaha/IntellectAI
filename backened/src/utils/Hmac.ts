import crypto from "crypto"

export function verifyShopifyHmac(
  query: Record<string, any>,
  apiSecret: string
): boolean {
  const { hmac, ...rest } = query

  if (!hmac) return false

  const message = Object.keys(rest)
    .sort()
    .map((key) => `${key}=${Array.isArray(rest[key]) ? rest[key].join(",") : rest[key]}`)
    .join("&")

  const generatedHmac = crypto
    .createHmac("sha256", apiSecret)
    .update(message)
    .digest("hex")

  return crypto.timingSafeEqual(
    Buffer.from(generatedHmac),
    Buffer.from(hmac)
  )
}
