import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Mailbox from './Page';
import './index.scss'



const rootElement = document.querySelector('#root')

ReactDOM.render(
    <Page/>, rootElement
)