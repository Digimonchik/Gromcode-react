import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import UsersList from './UsersList'

const usersList = [
    {
        name: 'Dima',
        age: 40,
        id: 1,
    },
    {
        name: 'Alex',
        age: 26,
        id: 2,
    }
]


const rootElement = document.querySelector('#root') 
ReactDOM.render(
    <UsersList users = {[]}/>, rootElement
)
