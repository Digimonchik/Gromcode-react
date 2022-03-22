import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    return (
        <button className='btn login' onClick={() => this.props.onLogin()}>Login</button>
    );  
  }
}
