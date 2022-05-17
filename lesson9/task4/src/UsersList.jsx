import User from './User';
import React, { Component } from 'react';

export default class UsersList extends Component {

  render() {
    return (
    <ul className="users">
    {this.props.users.map(element => <User name = {element.name} age = {element.age} key = {element.id}/>)}
    </ul>
    );
  }
}

