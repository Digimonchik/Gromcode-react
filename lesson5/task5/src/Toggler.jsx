import React, { Component } from 'react';

    
export default class Toggler extends Component {
    constructor(props) {
    
        super(props);

        this.state = {
            value: 'off'
        }
    }

    toggleOff= () => {
      this.setState({
        value: 'off'
      })
  }
  
toggleOn= () => {
      this.setState({
        value: 'on'
      })

  }
  

  render() {  
    const isOff = this.state.value
  return (
    <div>
      {isOff == 'off' ? (
        <div className = 'toggler' onClick={this.toggleOn}>Off</div>
      ) : (
        <div className = 'toggler' onClick={this.toggleOff}>On</div>
      )}
    </div>
  );
  }
}
