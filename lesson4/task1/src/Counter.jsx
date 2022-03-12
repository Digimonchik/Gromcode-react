import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
      super(props);
      
      props.start = [pr]
      this.state = {
        counter: props.start
      };
      
      setInterval(() => {
          this.setState({
              counter: this.state.counter + 1
          })
      }, props.interval)
  }
    
  render() {
    return (
            <div className='counter'> {this.state.counter}</div>
    );
  }
}

export default Counter
