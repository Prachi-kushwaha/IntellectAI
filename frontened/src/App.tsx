import { Routes, Route } from "react-router-dom";
import { SignupForm } from "./components/signup-form";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Default Route */}
      <Route path="/" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
