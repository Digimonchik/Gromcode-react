import React from 'react';
import Clock from './Clock';

const App = () => {
    return <>
        <Clock location="New York"
            offset={-7}></Clock>
    <Clock location="Kiev"
            offset={2}></Clock>
        
        <Clock location="London"
            offset={1}></Clock>
        </>
}

export default App