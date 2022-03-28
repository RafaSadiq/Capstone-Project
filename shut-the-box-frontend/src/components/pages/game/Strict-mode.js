import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ShutTheBox from "./ShutTheBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ShutTheBox />
  </StrictMode>,
  rootElement
);
