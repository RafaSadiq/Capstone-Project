import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ShutTheBox from "../game/ShutTheBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ShutTheBox />
  </StrictMode>,
  rootElement
);
