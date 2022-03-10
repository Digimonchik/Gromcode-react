import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate='2005-01-01T11:11:11.819Z'
  />,
  rootElement
);
