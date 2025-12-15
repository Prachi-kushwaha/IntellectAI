import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            Intellect<span className="text-indigo-500">AI</span>
          </span>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link to="/docs" className="hover:text-white transition">
            Docs
          </Link>
          <Link to="/mcp" className="hover:text-white transition">
            MCP
          </Link>
          <Link to="/agents" className="hover:text-white transition">
            Agents
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
