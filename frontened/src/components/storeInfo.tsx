import { Input } from "./ui/input"

export const StoreInfo = () => {
  return (
    <div className="mt-6 space-y-4">
      <div>
        <label>Store name</label>
        <Input type="text" placeholder="Your store name" />
      </div>

      <div>
        <label>Store domain</label>
        <Input type="text" placeholder="yourstore.myshopify.com" />
      </div>
      <div>
        <button className="bg-blue-300 text-white px-5 py-3 rounded-md">
            Next
        </button>
      </div>
    </div>
  )
}
