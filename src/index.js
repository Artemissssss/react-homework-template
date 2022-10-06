//Import React ↓
import React from "react";
import ReactDOM from "react-dom/client";
//Import style.css
import "./style.module.css";
//Import App ↓
import App from "./components/App.js";
const containerApp = <App />;
//Render ↓
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerApp);
