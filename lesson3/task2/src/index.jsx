import Search from './Search.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name='Tom' />, rootElement)