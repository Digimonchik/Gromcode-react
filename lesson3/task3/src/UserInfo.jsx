import React, {Component} from 'react'

export default class UserInfo extends Component {
    render() {
        return (<div className="user-info">
            <div className="user-info__name">{props.user.name}</div>
        </div>
        )
    }
}