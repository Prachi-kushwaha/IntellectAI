import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

   const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(import.meta.env.VITE_API_URL + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        username,
        email,
        password
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);

      alert("Account created!");
      navigate("/home");
    } else {
      alert(data.error || "Signup failed");
    }
  };


  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-gray-900/40 border border-gray-800 rounded-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Create your <span className="text-indigo-500">IntellectAI</span> account
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Start connecting your software to AI.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              onChange={(e)=>setFullName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Username</label>
            <input
              type="text"
              placeholder="username"
               onChange={(e)=>setUsername(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="your@gmail.com"
               onChange={(e)=>setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
               onChange={(e)=>setPassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Confirm password</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition"
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-grow h-px bg-gray-800" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-800" />
        </div>

        {/* Social Signup */}
        <div className="space-y-3">
          <button className="w-full border border-gray-800 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg text-sm transition">
            Sign up with Google
          </button>
          <button className="w-full border border-gray-800 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg text-sm transition">
            Sign up with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
