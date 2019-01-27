import React, { Component } from "react";
import "./LandingPage.css";
import Button from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="contents">
        <center>
          <Logo />
          <div className="buttons">
            <Link to="/JoinRoom">
              <Button state="primary" text="Join a Room" />
            </Link>
            <Link to="/CreateRoom">
              <Button state="secondary" text="Create a Room" />
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

export default LandingPage;
