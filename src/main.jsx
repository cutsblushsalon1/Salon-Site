import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PrivacyPolicy from "./components/LegalPrivacy";
import TermsAndConditions from "./components/TermsAndConditions";
import "./global.css";
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);