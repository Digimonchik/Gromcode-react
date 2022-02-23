import React, { Component } from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
    const element = (
        <div className="user-info">
            <Avatar name={props.user.name} avatarUrl={props.user.avatarUrl}/>
            <div className="user-info__name">{props.user.name}</div>
        </div>
        )
    return element
}
    
export default UserInfo