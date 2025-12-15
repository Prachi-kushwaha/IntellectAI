import React, { useState } from "react"
import { StoreInfo } from "./components/storeInfo"

const ShopifyMcp = () => {
  const [storeInfoForm, setStoreInfoForm] = useState(false)

  return (
    <div>
      <h1 className="mb-10">Shopify MCP</h1>

      <button
        onClick={() => setStoreInfoForm(true)}
        className="bg-black text-white p-5"
      >
        Connect Shopify
      </button>

      {storeInfoForm && <StoreInfo />}
    </div>
  )
}

export default ShopifyMcp
