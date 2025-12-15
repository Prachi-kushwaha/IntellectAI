const Hero = () => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <div className="inline-block mb-6 rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300">
          MCP & Agent Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Connect your software to AI
          <br />
          <span className="text-indigo-500">without rebuilding everything</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          IntellectAI lets you expose your tools, databases, and workflows to
          large language models using MCP and intelligent agents.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Get Started
          </a>

          <a
            href="/docs"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Read Docs
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
