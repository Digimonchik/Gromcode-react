import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
        isOnline: false 
    }
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

