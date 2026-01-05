import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

//For hosting in Github pages domain ie thesophile.github.io 
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter basename="/neopotter-2">
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );