import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
    
        super(props);

        this.state = {
            counter: 0
        }
        this.decrement = this.decrement.bind(this)
   
    }

    decrement() {
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter - 1
        })
    }
    increment = () => {
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter + 1
        })
    }
    reset() {
        this.setState({
            counter: this.state.counter = 0
        })
    }
    
  render() {
    return (
      <div className="counter">
    <button data-action="decrease" className="counter__button" onClick={this.decrement}>-</button>
            <span className="counter__value" onClick = {() => this.reset()}>{this.state.counter} </span>
    <button data-action="increase" className="counter__button" onClick={this.increment}>+</button>
</div>
    );
  }
}
