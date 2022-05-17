import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="filter">
    <span className="filter__count">{this.props.filterCount}</span>
    <input type="text" className="filter__input" onChange = {this.props.onChange} value = {this.props.filterText} />
  </div>
      </div>
    )
  }
}
