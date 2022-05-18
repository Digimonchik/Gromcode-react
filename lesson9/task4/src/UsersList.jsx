import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';


export default class UsersList extends Component {
    state = {
        count: this.props.users.length,
        filterText: '',
        users: this.props.users
    }

    onChange = (event) => {
        const filteredList =  this.props.users.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState(
          {value: event.target.value,
            count: filteredList.length,
            users: filteredList
        })
      } 
     

  render() {
    return (
        <div>
            <Filter onChange = {this.onChange} value = {this.state.filterText} count = {this.state.count}/>
            <ul className="users">
    {this.state.users.map(element => <User name = {element.name} age = {element.age} key = {element.id}/>)}
    </ul>
        </div>
    );
  }
}
