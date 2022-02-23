import React, { Component } from 'react';


const Avatar = (props) => {
  console.log(props)
  const element = (
    
    <img
      className="avatar"
      src={props.avatarUrl}
      alt={props.name}
    />
  )
  return element
}
export default Avatar
