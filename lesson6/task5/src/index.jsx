import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Auth from './Auth';
import './index.scss'



const rootElement = document.querySelector('#root')

ReactDOM.render(
    <Auth/>, rootElement
)