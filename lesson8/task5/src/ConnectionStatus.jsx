import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
      OnlineStatus: true
  }

  setStatus  = () => {
    this.setState(
        {
            OnlineStatus: !this.state.OnlineStatus
        }
    )
  }

  componentDidMount() {
      window.addEventListener('online', this.setStatus)
        window.addEventListener('offline', this.setStatus)
        }

    // componentWillUnmount() {
    //   window.removeEventListener('online', this.setStatus)
    //     window.removeEventListener('offline', this.setStatus)
    // }


    render() {
      console.log(this.state.OnlineStatus)
    return (
      this.state.OnlineStatus ? <div className = 'status'>online</div> : <div className = 'status status_offline'>offline</div>
      
    );
  }
}
