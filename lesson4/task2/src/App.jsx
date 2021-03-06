import React from 'react';
import Clock from './Clock';

const App = () => {
    return <>
        <Clock location="New York"
            offset={-5}></Clock>
    <Clock location="Kiev"
            offset={2}></Clock>
        
        <Clock location="London"
            offset={0}></Clock>
        </>
}

export default App