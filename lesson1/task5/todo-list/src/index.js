import './styles.css';
import React from "react";
import ReactDOM from "react-dom";


const rootElement = document.querySelector("#root");

const elem = (
<h1 className="title">Todo List</h1>
)

ReactDOM.render(elem, rootElement)