import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import UserForm from './UserForm';

const rootElement = document.querySelector('#root')

ReactDOM.render(
    <UserForm/>, rootElement
)
