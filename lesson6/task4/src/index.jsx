import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Status from './Status';
import './index.scss'



const rootElement = document.querySelector('#root')

ReactDOM.render(
    <Status/>, rootElement
)