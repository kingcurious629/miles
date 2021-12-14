// Findout what StrictMode means
import { StrictMode } from "react";
// Findout how React uses a Shadow dom
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
