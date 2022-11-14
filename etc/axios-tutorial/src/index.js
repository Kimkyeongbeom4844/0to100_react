import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
export const { REACT_APP_HOST, REACT_APP_PORT } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
