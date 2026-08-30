import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LegalPrivacy from "./components/LegalPrivacy";
import LegalDataDeletion from "./components/LegalDataDeletion";
import TermsAndConditions from "./components/TermsAndConditions";
import "./global.css";
import "remixicon/fonts/remixicon.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<LegalPrivacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/data-deletion" element={<LegalDataDeletion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
