import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const rootElement = document.querySelector('#root')

ReactDOM.render(
    <><Counter
        start={0} 
    interval = {100}
    ></Counter>
    <Counter
        start={-100} 
    interval = {1000}
        ></Counter>
    <Counter
        start={-5} 
    interval = {1000}
></Counter></>, rootElement
)