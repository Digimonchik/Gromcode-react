import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Mailbox from './MailBox';
import './index.scss'



const rootElement = document.querySelector('#root')

ReactDOM.render(
    <Mailbox unreadMessages={[1,2]}/>, rootElement
)