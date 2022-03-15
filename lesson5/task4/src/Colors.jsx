
import React, { Component } from 'react';

export default class Colors extends Component {
    setBodyColor = color => {
        document.body.style.backgroundColor = color;
    }
    
    render() {
        return (
            <div className='colors'>
                <button className="colors__button" style={{backgroundColor: `RED` }} onClick = {() => this.setBodyColor(`RED`)}/>
                <button className="colors__button" style={{backgroundColor: `GREEN`}} onClick = {() => this.setBodyColor(`GREEN`)}/>
                <button className="colors__button" style={{backgroundColor: `BLUE`}} onClick = {() => this.setBodyColor(`BLUE`)}/>
            </div>
        );
    }
}