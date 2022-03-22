import Login from './Login';
import Logout from './Logout';
import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }
    onLogout = () =>
    {
        this.setState({
    isLoggedIn: false
        })
        
        }
    onLogin = () =>
    {
        this.setState({
    isLoggedIn: true
        })
        
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
                </div>
                
            <div className='panel'>{this.state.isLoggedIn ? <Logout onLogout = {this.onLogout}/> : <Login onLogin={this.onLogin}/>}
                </div>
                </div>
                )
    
    }
}