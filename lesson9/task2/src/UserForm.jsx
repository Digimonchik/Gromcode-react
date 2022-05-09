import React, { Component } from 'react';

export default class UserForm extends Component {
  state = {
    about: '',
    name: '',
    occupation: '',
    student: false
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    const newUser = this.state
   this.props.onSubmit(newUser)
  }
  handleChange = (e) => {
    const {name, value, type, checked} = e.target
    type === 'checkbox' 
    ? this.setState({
      [name]: checked
    }) 

    :this.setState({
      [name]: value
    })
  }
  render() {
    return (
    <form className="login-form" onSubmit={this.onSubmit}>
  <h1 className="form-title">Profile</h1>
  <div className="form-control">
    <label className="form-label" htmlFor="name">Name</label>
    <input 
        onChange={this.handleChange}
        className="form-input" 
        type="text" 
        id="name" 
        name="name" 
        value={this.state.name}/>
  </div>
  <div className="form-control">
    <label className="form-label" htmlFor="student">Student</label>
    <input 
        className="form-input" 
        type="checkbox" 
        id="student" 
        name="student"
        checked = {this.state.student}
        onChange ={this.handleChange}/>
  </div>
  <div className="form-control">
    <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
    <select name="occupation" className="form-input" onChange={this.handleChange}>
      <option value="london">London</option>
      <option value="new-york">New York</option>
      <option value="coconut">Sidney</option>
      <option value="mango">Berlin</option>
    </select>
  </div>
  <div className="form-control">
    <label className="form-label" id="about" htmlFor="about">About</label>
    <textarea name="about" className="form-input" onChange = {this.handleChange} value = {this.state.value} />
  </div>
  <button className="submit-button" type="submit">Submit</button>
</form>
    );
  }
}


