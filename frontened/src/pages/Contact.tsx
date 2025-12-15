const Contact = () => {
  return (
    <section className="bg-gray-950 text-white py-24 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in touch
          </h2>
          <p className="text-gray-400">
            Questions, partnerships, or early access — we’d love to hear from you.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              placeholder="Tell us how we can help..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
