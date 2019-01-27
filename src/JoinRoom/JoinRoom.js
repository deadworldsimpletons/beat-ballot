import React, { Component } from 'react';
import './JoinRoom.css';
import image from '../tempImages/qr.png';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo.js';


class JoinRoom extends Component {
  render() {
    return (
      <div>
        <center>
        <Logo />
        <div className = "QR">
          <img src = {image}/>
        </div>
        <p>Scan to Join</p>
        <div className = "buttons">
          <Button state = 'primary' text='Back'/>
        </div>
        </center>
      </div>
    );
  }
}

export default JoinRoom;
