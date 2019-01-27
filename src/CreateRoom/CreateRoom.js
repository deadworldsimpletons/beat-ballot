import React, { Component } from 'react';
import './CreateRoom.css';
import Button from '../Button/Button.js';

class CreateRoom extends Component {
  render() {
    return (
      <div>
        <center>
        <img src = "../images/beatBallot.png" />
        <div className = "forms">
            
        </div>
        <div className = "buttons">
          <Button color='blue' text='Back'/>
          <Button color='red' text='Create a Room'/>
        </div>
        </center>
      </div>
    );
  }
}

export default CreateRoom;
