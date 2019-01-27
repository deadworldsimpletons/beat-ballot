import React, { Component } from 'react';
import './Logo.css';
import logo from '../images/beatBallot.png';

class Logo extends Component {
  render() {
    return (

        <div className = "logoHeader">
          <center>
            <p>BeatBallot &nbsp;
            <img src = {logo} />
            </p>
          </center>
        </div>

    );
  }
}

export default Logo;
