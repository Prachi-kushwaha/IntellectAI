import { useState } from "react"

const ShopifyMcp = () => {
  const [storeName, setStoreName] = useState("")
  const [storeDomain, setStoreDomain] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const token = localStorage.getItem("token")

  // STEP 2 — save store in DB
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/shopify/mcp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ storeName, storeDomain }),
    }
  )

  const data = await res.json()

  if (!res.ok) {
    alert(data.error || "Failed to save store")
    return
  }

  // STEP 3 — ask backend for Shopify auth URL
  const authRes = await fetch(
    `${import.meta.env.VITE_API_URL}/shopify/auth-url?shop=${storeDomain}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

 const authData = await authRes.json()

if (!authData.authUrl) {
  console.error("Shopify auth URL missing:", authData)
  alert("Failed to get Shopify auth URL")
  return
}
  // STEP 4 — redirect to Shopify
  window.location.href = authData.authUrl
}

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Info */}
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Shopify <span className="text-indigo-500">MCP</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              Let AI understand and reason over your Shopify store — securely and
              without giving full admin access.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Ask AI questions about products, orders, and customers</li>
              <li>• Analyze store performance in real time</li>
              <li>• No dashboard required</li>
              <li>• Read-only access by default</li>
              <li>• Secure access via Model Context Protocol</li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">
              Connect your Shopify store
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Store name
                </label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="My Store"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Store domain
                </label>
                <input
                  type="text"
                  value={storeDomain}
                  onChange={(e) => setStoreDomain(e.target.value)}
                  placeholder="mystore.myshopify.com"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition"
              >
                Connect to Shopify
              </button>
            </form>

            {/* Helper text */}
            <p className="text-xs text-gray-400 mt-4">
              You’ll be redirected to Shopify to approve secure access.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopifyMcp
