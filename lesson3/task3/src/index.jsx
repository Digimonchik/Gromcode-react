import './styles.scss';
import ReactDOM from 'react-dom';
import React from 'react'
import Comment from './Comment';

const rootElem = document.querySelector('#root')

const userInfo = {
    name: 'Tom',
    avatarUrl: 'http://avatars1.githubusercontent.com/github'
}
ReactDOM.render(<Comment
    user={userInfo}
    text='Good job'
    date= {new Date()}
/>, rootElem)