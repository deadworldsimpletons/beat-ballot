import React, { Component } from "react";
import "./JoinRoom.css";
import image from "../tempImages/qr.png";
import Button from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class JoinRoom extends Component {
  render() {
    return (
      <div>
        <center>
          <Logo />
        </center>
      </div>
    );
  }
}

export default JoinRoom;
