import React, { Component } from 'react';

export default class Logout2 extends Component {
    constructor(props) {

        super(props)
  }
    
  render() {
    return (
      <button className='btn logout' onClick={() => this.props.onLogout()}>Logout</button>
    );
  }
}
