import User from './User';
import React, { Component } from 'react';

export default class UsersList extends Component {
  state = {
    users: this.props.users
  }

  render() {
    return (
    <ul className="users">
    {this.state.users.map(element => <User name = {element.name} age = {element.age} key = {element.id}/>)}
    </ul>
    );
  }
}

