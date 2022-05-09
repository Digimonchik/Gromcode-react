import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
      alert('Search text: good restaurant');        
      event.preventDefault()

      }
  render() {
    return (
        <form className="search">
        <input type="text" className="search__input" onChange = {this.handleChange} value ={this.state.value}/>
        <button className="search__button" onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}
