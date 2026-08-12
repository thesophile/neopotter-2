import { Routes, Route } from "react-router-dom";
import NeopotterLanding from "./NeopotterLanding"
import Terms from "./pages/Terms";

export default function App() {
  return (
    <div>
      <a
        href="https://wa.me/919778303038"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-cyan-600 text-white text-center text-sm font-medium py-2.5 px-4 hover:bg-cyan-500 transition"
      >
        This domain (neopotter.com) is for sale. Contact me on WhatsApp.
      </a>
      <Routes>
        <Route path="/" element={<NeopotterLanding />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}
