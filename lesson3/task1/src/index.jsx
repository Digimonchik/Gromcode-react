import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Search from './search.jsx'

const rootElem = document.querySelector('#root');

ReactDOM.render(<Search name = 'Bob' />, rootElem)