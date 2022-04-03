import React, { Component } from 'react';

const Spinner = ({isLogginIn, size}) => {

if (!isLogginIn) {
    return null
}
 return <span className="spinner" style = {{
     width: size, height: size
 }}></span>
}

export default Spinner