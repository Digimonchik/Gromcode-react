import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Avatar = (props) => {
        const element = (
            <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
            />
    )
    return element
}
    export default Avatar
