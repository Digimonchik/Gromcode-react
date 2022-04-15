import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
      status: 'online'
  }

  setOnline = () => {
    this.setState(
        {
            status: 'online'
        }
    )}
    setOffline = () => {
      this.setState(
          {
              status: 'offline'
          }
      )}
    


  componentDidMount() {
      window.addEventListener('online', this.setOnline),
      window.addEventListener('offline', this.setOffline)
      }

    componentWillUnmount() {
      window.removeEventListener('online', this.setOnline),
      window.removeEventListener('offline', this.setOffline)
    }


    render() {
    return (
      this.state.status === 'online' ? <div className = 'status'>online</div> : <div className = 'status status_offline'>offline</div>
      
    );
  }
}
