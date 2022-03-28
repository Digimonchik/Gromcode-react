import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Status extends Component {
    state = {
        isOnline: false 
    }

reconnect = () => {
    this.setState({
        isOnline: true
    })
}

  render() {
     return this.state.isOnline ? <Online/> : <Offline reconnect = {this.reconnect}/>
  }
}

