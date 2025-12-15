const steps = [
  {
    step: "01",
    title: "Connect your system",
    description:
      "Connect your existing software, APIs, or databases without changing your current architecture.",
  },
  {
    step: "02",
    title: "Expose capabilities via MCP",
    description:
      "Use Model Context Protocol (MCP) to define what AI can read or interact with — securely and explicitly.",
  },
  {
    step: "03",
    title: "Let AI agents reason and act",
    description:
      "AI agents use your MCP-enabled tools to answer questions, analyze data, or perform controlled actions.",
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-gray-950 text-white py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-indigo-500">IntellectAI</span> works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, secure way to connect your software to AI using MCP and agents.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-gray-800 bg-gray-900/40 p-8"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 bg-gray-950 border border-gray-800 rounded-lg px-3 py-1 text-sm text-indigo-400">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
