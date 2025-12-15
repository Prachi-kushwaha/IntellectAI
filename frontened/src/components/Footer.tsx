const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Intellect<span className="text-indigo-500">AI</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Connecting software to AI using MCP and intelligent agents.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs" className="hover:text-white transition">Docs</a></li>
              <li><a href="/mcp" className="hover:text-white transition">MCP</a></li>
              <li><a href="/agents" className="hover:text-white transition">Agents</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} IntellectAI. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Built for developers • AI-native • Secure by design
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
