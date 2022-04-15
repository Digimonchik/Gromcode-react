import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
      status: false
  }

  setStatus  = () => {
    this.setState(
        {
            status: !this.state.status
        }
    )
  }


  componentDidMount() {
      window.addEventListener('online', this.setStatus),
      window.addEventListener('offline', this.setStatus)
      }

    componentWillUnmount() {
      window.removeEventListener('online', this.setStatus),
      window.removeEventListener('offline', this.setStatus)
    }


    render() {
    return (
      this.state.status ? <div className = 'status'>online</div> : <div className = 'status status_offline'>offline</div>
      
    );
  }
}
