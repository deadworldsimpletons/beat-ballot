import React, { Component } from 'react';
import './JoinRoom.css';
import Button from '../Button/Button.js';

class JoinRoom extends Component {
  render() {
    return (
      <div>
        <center>
        <img src = "../images/beatBallot.png" />
        <div className = "forms">

        </div>
        <p>Scan to Join</p>
        <img src = ""/> 
        <div className = "buttons">
          <Button color='blue' text='Back'/>
        </div>
        </center>
      </div>
    );
  }
}

export default JoinRoom;
