import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import UsersList from './UsersList';


const usersList = [
    {   id: '1',
        name: 'Dima',
        age: 27
    },
    {
        id: '2',
        name: 'neDima',
        age: 26
    }
]
const rootElement = document.querySelector('#root') 
ReactDOM.render(
    <UsersList users = {usersList}/>, rootElement
)
