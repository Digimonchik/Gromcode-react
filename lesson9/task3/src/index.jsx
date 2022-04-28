import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './UserForm';

const rootElement = document.querySelector('#root')
const createUser = (obj) => {
    console.log(obj)
  }
ReactDOM.render(
    <App createUser = {createUser}/>, rootElement
)
