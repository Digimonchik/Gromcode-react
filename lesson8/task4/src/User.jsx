import React, { Component } from 'react';

export default class User extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        console.log(`1`)
        fetch(`https://api.github.com/users/${this.props.userId}`).then(response => response.json()).then(data => this.setState({
            user: data
        })).then(() => console.log(this.state.user))
        
    }
  render() {
    console.log(`2`)
    if (!this.state.user)
    {return null}
    return (
        <div className="user">
        <img
          alt="User Avatar"
          src={this.state.user.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>
          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }
}
