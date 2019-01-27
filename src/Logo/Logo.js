import React, { Component } from 'react';
import './Logo.css';
import logo from '../images/beatBallot.png';

class Logo extends Component {
  render() {
    return (
        <div className = "logoHeader">
            <p>BeatBallot</p>
            <img src = {logo} />
        </div>
    );
  }
}

export default Logo;
