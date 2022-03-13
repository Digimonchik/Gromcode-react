import './styles.scss';
import ReactDOM from 'react-dom';
import React from 'react'
import Comment from './Comment';

const rootElem = document.querySelector('#root')

const UserInfo = {
    name: 'Tom',
    avatarUrl: 'http://avatars1.githubusercontent.com/github'
}
ReactDOM.render(<Comment
    author={UserInfo}
    text='Good job!'
    date= {new Date()}
/>, rootElem)