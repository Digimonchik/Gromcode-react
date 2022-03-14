import React, { Component } from 'react';


class GoodButton extends Component {


    render() {
      
        const alertMessage = (e) => {
        alert(e.target.textContent)
    }
    return (
      <button className = 'fancy-button' onClick={alertMessage}> Click me!</button>
    );
  }
}

export default GoodButton