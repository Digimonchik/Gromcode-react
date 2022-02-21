import React, { Component } from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
    
    const element = (
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info__name">{props.user.name}</div>
        </div>
        )
    return element
}
    
export default UserInfo