const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-gray-900/40 border border-gray-800 rounded-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Sign in to <span className="text-indigo-500">IntellectAI</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Welcome back. Continue building with AI.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-grow h-px bg-gray-800" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-800" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full border border-gray-800 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg text-sm transition">
            Continue with Google
          </button>
          <button className="w-full border border-gray-800 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg text-sm transition">
            Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn
