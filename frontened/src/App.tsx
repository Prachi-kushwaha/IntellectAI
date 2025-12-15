import { Routes, Route } from "react-router-dom";
import { SignupForm } from "./components/signup-form";
import Dashboard from "./Dashboard";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import ShopifyMcp from "./components/ShopifyMcp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/shopifyMcp" element={<ShopifyMcp />} />



      {/* Default Route */}
      {/* <Route path="/" element={<SignupForm />} /> */}
    </Routes>
  );
}

export default App;
