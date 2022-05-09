import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    onInput = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleClick = (event) => {
        alert(`Search text: ${this.state.text}`)
        event.preventDefault()

      }
  render() {
    return (
        <form className="search">
        <input type="text" className="search__input" onChange = {this.onInput} value ={this.state.text}/>
        <button className="search__button" onClick={this.handleClick}>Search</button>
      </form>
    );
  }
}
