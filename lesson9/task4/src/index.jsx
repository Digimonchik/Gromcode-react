import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './App';




const rootElement = document.querySelector('#root') 
ReactDOM.render(
    <App usersList = {[]}/>, rootElement
)
