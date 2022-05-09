import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
<div class="filter">
    <span class="filter__count">5</span>
    <input type="text" class="filter__input" value="a" />
  </div>);
  }
}
