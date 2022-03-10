import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

const rootElement = document.querySelector("#root");

const user = {
  firstName: "John",
  lastName: "Doe",
  birthDate: new Date('2005-01-01T11:11:11.819Z')
}

ReactDOM.render(
  <Greeting
    firstName={user.firstName}
    lastName={user.lastName}
    birthDate={user.birthDate}  
  />, 
  rootElement
);
