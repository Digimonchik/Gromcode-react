import React, { Component } from 'react';
import UserForm from './UserForm';


export default class App extends Component {

  createUser = (obj) => {
    console.log(obj)
  }
    render() {
    return (
      <UserForm onSubmit = {this.createUser}/>
    );
  }
}
    