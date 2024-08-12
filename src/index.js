import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Map } from "./Map";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Map />
  </StrictMode>,
  rootElement
);
