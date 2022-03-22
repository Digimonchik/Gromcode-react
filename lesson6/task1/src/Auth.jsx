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
            <div className='panel'>
                <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
            <div>{this.state.isLoggedIn ? <Logout onLogout = {this.onLogout}/> : <Login onLogin={this.onLogin}/>}
                </div>
                </div>
                )
    
    }
}3