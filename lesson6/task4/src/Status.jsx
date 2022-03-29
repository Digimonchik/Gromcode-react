import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';


const Status = (props) => {


// reconnect = () => {
//     this.setState({
//         isOnline: true
//     })
// }

if (props.isOnline) {
         return <Online/>
     }
    return <Offline/>
  }

export default Status

