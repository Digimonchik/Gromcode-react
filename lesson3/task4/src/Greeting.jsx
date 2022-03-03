import React from 'react';

const getAge = (date) => {
    const timeOfbirth = new Date(date).getTime();
    const curentTime = new Date();
    return Math.floor((curentTime - timeOfbirth) / 31536000000);
}
const Greeting = (props) => {
return <div className="greeting">
        {`My name is 
        ${props.firstName} 
        ${props.lastName}. I'm ${getAge(props.birthDate)} years old.`}

    </div>
}

export default Greeting