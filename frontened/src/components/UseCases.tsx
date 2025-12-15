import { Link } from "react-router-dom"

const useCases = [
  {
    title: "Shopify MCP",
    description:
      "Let AI answer questions, analyze sales, and explore products using your live Shopify data — securely and in real time.",
    tag: "E-commerce",
    path: "/ShopifyMcp",
  },
  {
    title: "GitHub MCP",
    description:
      "Expose repositories, issues, pull requests, and commits to AI for smarter code understanding and developer workflows.",
    tag: "Developers",
    path: "/githubMcp",
  },
  {
    title: "Internal Tools MCP",
    description:
      "Connect databases, CRMs, or internal services so AI can query and reason over your company’s private data.",
    tag: "Startups",
    path: "/mcp/internal-tools",
  },
  {
    title: "AI Agents",
    description:
      "Build intelligent agents that can plan, reason, and act across multiple MCP-powered tools — safely and controllably.",
    tag: "Automation",
    path: "/agents",
  },
]


const UseCases = () => {
  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you can build with <span className="text-indigo-500">IntellectAI</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world MCP and agent use cases for modern AI-native teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-indigo-500 transition"
            >
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wide text-indigo-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
