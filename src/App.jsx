import { Routes, Route } from "react-router-dom";
import NeopotterLanding from "./NeopotterLanding"
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NeopotterLanding />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
