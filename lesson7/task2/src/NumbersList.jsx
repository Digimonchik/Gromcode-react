import React, { Component } from 'react';

class NumbersList extends Component {
  render() {

    return (
        <ul>
            {this.props.numbers.map( number => <li>{number}</li> )}
        </ul>
    );
  }
}

export default NumbersList