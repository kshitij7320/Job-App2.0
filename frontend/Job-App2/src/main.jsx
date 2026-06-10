import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/forms.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/job-card.css";
import "./styles/pages.css";
import "./styles/jobs-page.css";
import "./styles/auth-page.css";
import "./styles/about-page.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
