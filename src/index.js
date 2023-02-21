import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { ContextProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
