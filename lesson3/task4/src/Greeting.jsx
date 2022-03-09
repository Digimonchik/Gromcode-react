import React from 'react';

const getAge = (date) => {
    const timeOfbirth = new Date(date).getTime();
    const curentTime = new Date();
    return Math.floor((curentTime - timeOfbirth) / 31536000000);
}
const Greeting = (props) => {
const element = <div className="greeting">
        {`My name is John Doe. I'm 17 years old`}
    </div>

    return element
}

export default Greeting