import React, { Component } from 'react';

export default class Dimensions extends Component {
  state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
componentDidMount() {
    window.addEventListener('resize',  this.onResize)
    const {innerWidth, innerHeight} = window
    this.setDimesion(innerWidth, innerHeight)
    document.title = `${innerWidth} x ${innerHeight}`

}

componentWillUnmount() {
    window.removeEventListener('resize', this.onResize  )
}
setDimesion = (width, height) => {
    this.setState(
        {
            width,
            height
        }
    )
}

onResize = e => {
    const {innerWidth, innerHeight} = e.target;
    this.setDimesion(innerWidth, innerHeight)
    document.title = `${innerWidth} x ${innerHeight}`

    }
  render() {
    return (
      <div>
          {innerWidth} x {innerHeight}
      </div>
    );
  }
}
