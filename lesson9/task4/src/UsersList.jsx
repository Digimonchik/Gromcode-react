import React, { Component } from 'react';
import User from './User';



export default class UsersList extends Component {

state = {
 sorting: null
}

toggleSorting = () => {
    this.state.sorting === 'asc' ? this.setState({
      sorting: 'desc'
    }) : this.setState({
      sorting: 'asc'
    })
}

  render() {
    let usersList;
    if (this.state.sorting) {
       usersList = this.props.users.slice().sort((a, b) => 
       this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age)}
    else {
      usersList = this.props.users
    }
   
    
    return <div>
     <button className='btn' onClick={()=> this.toggleSorting()}>
       {this.state.sorting || `-`}
     </button>
    <ul className='users'>
    {usersList.slice().map(
        (user => <User key = {user.id} {...user} />))}

    </ul>
    </div>
  }
}
