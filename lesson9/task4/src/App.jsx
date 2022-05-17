import React, { Component } from 'react';
import Filter from './Filter';
import UsersList from './UsersList';


export default class App extends Component {
    state = {
        filterCount: '',
        filterText: '',
        newUsersList: this.props.usersList

    }

    onChange = (event) => {
        const filteredList =  this.props.usersList.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState(
          {value: event.target.value,
            newUsersList: filteredList,
            filterCount: filteredList.length
        })
      }
     

  render() {
    return (
        <div>
            <Filter onChange = {this.onChange} value = {this.state.filterText} filterCount = {this.state.filterCount}/>
            <UsersList users = {this.state.newUsersList}/>
        </div>
    );
  }
}
