import React from "react";
import ReactDOM from "react-dom";

const rootElem = document.querySelector("#root");

const elem = (
  <div className="greeting">
    <div className="greeting__title">Hello, World!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(elem, rootElem);
