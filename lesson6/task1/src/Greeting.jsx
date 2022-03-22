import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default class Greeting extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
                <div>
                    {this.props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
                </div>
                
    );
  }
}
