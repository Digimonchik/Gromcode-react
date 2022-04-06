import React, { Component } from 'react';
import Transaction from './Transaction';

export default class TransactionsList extends Component {
  render() {
    return (
      <ul className='transactions'>
          {this.props.transactions.slice().map((transaction => 
            <Transaction key ={transaction.id} {...transaction}/>))}
      </ul>
    );
  }
}
