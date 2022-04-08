import Clock from './Clock';
import React, { Component } from 'react';

class App extends Component {
    state = {
        visible: true
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() { return <div>
        <button onClick = {()=>this.toggle()}></button>
        {this.state.visible && <div>
        <Clock location="New York"
            offset={-5}></Clock>
        <Clock location="Kiev"
            offset={2}></Clock>
        <Clock location="London"
            offset={0}></Clock>
        </div>}</div>
        
}
}

export default App