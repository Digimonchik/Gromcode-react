import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import Board from './Board';


const rootElement = document.querySelector('#root') 
ReactDOM.render(
    <Board/>, rootElement
)
