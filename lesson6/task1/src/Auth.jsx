import Login from './Login';
import Logout from './Logout';
import React, { Component } from 'react';
import Greeting from './Greeting';
export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }
    handleLogout = () =>
    {
        this.setState({
    isLoggedIn: false
        })
        
        }
    handleLogin = () =>
    {
        this.setState({
    isLoggedIn: true
        })
        
    }
    render() {
        return (
            <div className='panel'>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
            {this.state.isLoggedIn ? <Logout onLogout = {this.handleLogout}/> : <Login onLogin={this.handleLogin}/>}
             </div>
                )
    
    }
}3