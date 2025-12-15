const About = () => {
  return (
    <section className="bg-gray-950 text-white py-24 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-indigo-500">IntellectAI</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          IntellectAI is built on a simple belief_toggle: AI should integrate with your
          existing software and data — not force you to rebuild everything from scratch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40">
            <h3 className="font-semibold mb-3">Developer First</h3>
            <p className="text-sm text-gray-400">
              Designed for developers who want clean abstractions, clear control,
              and minimal overhead.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40">
            <h3 className="font-semibold mb-3">MCP Native</h3>
            <p className="text-sm text-gray-400">
              Built around Model Context Protocol to expose software capabilities
              to AI in a secure, explicit way.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40">
            <h3 className="font-semibold mb-3">Security by Design</h3>
            <p className="text-sm text-gray-400">
              Read-only by default, explicit permissions, and no hidden AI actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
