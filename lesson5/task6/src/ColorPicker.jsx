import React, { Component } from 'react';


export default class Toggler extends Component {
  constructor(props) {

    super(props);

    this.state = {
      value: ''
    }
  }

  // changeColor = (e) => {
  //   const str = e.target.style.backgroundColor;
  //   const newValue = str[0].toUpperCase() + str.slice(1);
  //   this.setState({
  //     value: newValue
  //   })
  // }
  setColor = (color) => {
    this.setState({
          value: color
        })
  }
  clearValue = () => {
        this.setState({
          value: ''
        })
      }


  render() {
    return (
    <div>
        <div className="picker__title">{this.state.value}</div>
                <div>
          <button className="picker__button picker__button_coral" style={{backgroundColor: 'coral', }} onMouseEnter={() => this.setColor('Coral')} onMouseLeave={() => this.clearValue()}/>
                <button className="picker__button picker__button_aqua" style={{backgroundColor: 'aqua',}} onMouseEnter = {() => this.setColor('Aqua')} onMouseLeave={() => this.clearValue()}/>
                <button className="picker__button picker__button_bisque" style={{backgroundColor: 'bisque',}} onMouseEnter = {() => this.setColor('Bisque')} onMouseLeave={() => this.clearValue()}/>
      </div>
    </div>
    )
  }
}
