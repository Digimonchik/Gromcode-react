import React, { Component } from 'react';


class GoodButton extends Component {
alertMessage(event) {
        alert(event.target.textContent)
    }

    render() {
    return (
      <button className = 'fancy-button' onClick={alertMessage}> Click me!</button>
    );
  }
}

export default GoodButton