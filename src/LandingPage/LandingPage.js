import React, { Component } from 'react';
import './LandingPage.css';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo.js';

class LandingPage extends Component {
  render() {
    return (
      <div className = "contents">
        <center>
        <Logo />
        <div className = "buttons">
          <Button state ='primary' text='Join a Room' />
          <Button state = 'secondary' text='Create a Room'/>
        </div>
        </center>
      </div>
    );
  }
}

export default LandingPage;
