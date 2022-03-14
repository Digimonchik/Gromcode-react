import React, { Component } from 'react';


class GoodButton extends Component {


    render() {
      
        const alertMessage = (event) => {
        alert(event.target.textContent)
    }
    return (
      <button className = 'fancy-button' onClick={alertMessage}> Click me!</button>
    );
  }
}

export default GoodButton