import React, { Component } from 'react';

export default class Dimensions extends Component {
  state = {
            width: null,
            height: null
        };
componentDidMount() {
    window.addEventListener('resize',  this.onResize)
    const {innerWidth, innerHeight} = window
    this.setDimesion(innerWidth, innerHeight)
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
    document.title = `${innerWidth} x ${innerHeight}`

}

onResize = e => {
    const {innerWidth, innerHeight} = e.target;
    this.setDimesion(innerWidth, innerHeight)
    document.title = `${innerWidth} x ${innerHeight}`

    }
  render() {
    return (
      <div className='dimensions'>
          {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}
