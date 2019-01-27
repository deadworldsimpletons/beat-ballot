import React, { Component } from 'react';
import './LandingPage.css';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo.js';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <center>
        <Logo />
        <div className = "buttons">
          <Button color='blue' text='Join a Room' />
          <Button color='red' text='Create a Room'/>
        </div>
        </center>
      </div>
    );
  }
}

export default LandingPage;
