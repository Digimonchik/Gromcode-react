import React, { Component } from 'react';

export default class ConnectionStatus extends Component {
  state = {
      OnlineStatus: true
  }

  setStatus  = () => {
      console.log(this.state)
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


    render() {
        let newClass;
        newClass = this.state.OnlineStatus ? `status` : `status status_offline`
    return (
      <div className={newClass}>online</div>
    );
  }
}
