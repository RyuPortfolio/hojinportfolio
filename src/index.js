import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // BrowserRouter를 HashRouter로 변경
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      <App />
    </HashRouter>
  </React.StrictMode>
);
