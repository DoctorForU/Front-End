import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { Router } from "./router";
import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);

reportWebVitals();
