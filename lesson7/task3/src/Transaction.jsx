import React, { Component } from 'react';

export default class Transaction extends Component {
  render() {
    return (
      <li className= 'transaction'>
    <span className="transaction__date"></span>
    <span className="transaction__time"></span>
    <span className="transaction__assets">USD → EUR</span>
    <span className="transaction__rate">0.8</span>
    <span className="transaction__amount">1,200</span>
      </li> 
    );
  }
}
