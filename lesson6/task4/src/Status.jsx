import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
        isOnline: true
    }
}
reconnect = () => {
    this.setState({
        isOnline: true
    })
}

  render() {
     if (this.state.isOnline) {
         return <Online/>
     }
    return <Offline reconnect = {this.reconnect}/>
  }
}

