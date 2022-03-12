import Counter from '/Counter';
import React from 'react';


const App = () => {
    const element = (<>
        <Counter
        start={0} 
    interval = {100}
    ></Counter>
    <Counter
        start={-100} 
    interval = {1000}
        ></Counter>
    <Counter
        start={-5} 
    interval = {1000}
        ></Counter></>)
    return element
}

export default App