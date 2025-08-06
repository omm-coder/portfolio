import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <div className="bg-indigo-950 w-full h-screen">
        <App />
      </div>
    </StrictMode>
  </BrowserRouter>
);
