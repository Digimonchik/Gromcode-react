import './styles.scss';
import ReactDOM from 'react-dom';
import React from 'react'
import Comment from './Comment';
import UserInfo from './UserInfo';

const rootElem = document.querySelector('#root')

const userInfo = {
    name: 'Tom',
    avatarURL: 'http://avatars1.githubusercontent.com'
}
ReactDOM.render(<Comment
    user={userInfo}
    text='Good job'
    date= {new Date()}
/>, rootElem)