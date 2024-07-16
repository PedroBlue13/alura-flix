// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { VideoProvider } from "./context/VideoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </React.StrictMode>
);
