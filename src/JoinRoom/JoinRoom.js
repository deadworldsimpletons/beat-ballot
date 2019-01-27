import React, { Component } from 'react';
import './JoinRoom.css';
import image from '../tempImages/qr.png';
import Button from '../Button/Button.js';

class JoinRoom extends Component {
  render() {
    return (
      <div>
        <center>
        <img src = "../images/beatBallot.png" />
        <div className = "QR">
          <img src = {image}/>
        </div>
        <p>Scan to Join</p>
        <div className = "buttons">
          <Button color='blue' text='Back'/>
        </div>
        </center>
      </div>
    );
  }
}

export default JoinRoom;
