import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import MyContext from "./utils/Context.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <App />
    </MyContext>
  </BrowserRouter>
);
