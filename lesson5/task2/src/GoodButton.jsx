import React, { Component } from 'react';


class GoodButton extends Component {
alertMessage(e) {
        alert(e.target.textContent)
    }

    render() {
    return (
      <button className = 'fancy-button' onClick={this.alertMessage}> Click me!</button>
    );
  }
}

export default GoodButton