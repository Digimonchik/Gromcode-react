import Login from './Login';
import Logout from './Logout';
import React, { Component } from 'react';
import Spinner from './Spinner'
export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogginIn: false,
            isLoggedIn: false
        }
    }
    handleLogout = () => {
        this.setState({
    isLoggedIn: false
        })
        }
    
    handleLogin = () =>
    {this.setState({
        isLogginIn: true
    })
        setTimeout(()=>this.setState({
        isLoggedIn: true,
        isLogginIn: false
            }), 2000) 
    }
    render() {
        return (
            <div className='panel'>
            <Spinner size = {`20px`} isLogginIn = {this.state.isLogginIn}/>
            {this.state.isLoggedIn ? <Logout onLogout = {this.handleLogout}/> : <Login onLogin={this.handleLogin}/>}
             </div>
                )
    
    }
}