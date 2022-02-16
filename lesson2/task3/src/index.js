import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

const renderTime = () => {
  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? "white" : "black";
  const textColor = seconds % 2 !== 0 ? "white" : "black";

  const element = (
    <div
      className="seconds"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      Now is {seconds}
    </div>
  );
  ReactDOM.render(element, rootElem);
};
setInterval(renderTime, 1000);
