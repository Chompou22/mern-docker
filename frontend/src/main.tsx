import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement: Element | null = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found");
}
