import React, { Component } from 'react';

export default class Life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'working'
        }
        console.log(`constructor: good place to create state`)
    }
componentDidMount(){
    console.log(`componentDidMount: API calls, subscriptions`)
}

componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props')
}
shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render')
    return true
}

componentWillUnmount() {
    console.log(`componentWillUnmount(): cleanup before DOM related to component will be removed`)
}

  render() {
      console.log('return React element to build DOM')
    return (
          <div>{this.state.status}</div>
    );
  }
}
