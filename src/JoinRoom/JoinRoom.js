import React, { Component } from "react";
import "./JoinRoom.css";
import image from "../tempImages/qr.png";
import Button from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class JoinRoom extends Component {
  state = {
    room_id: ""
  };

  constructor() {
    super();
    this.setRoom = this.setRoom.bind(this);
  }

  setRoom(e) {
    this.setState({ room_id: e.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <Logo />
          <div className="input">
            <input placeholder="Room ID" onChange={this.setRoom} />
          </div>
          <p>(placeholder)Or scan QR code</p>
          <div className="buttons">
            <Link to={`/Room/${this.state.room_id}`}>
              <Button state="primary" text="Join" />
            </Link>
            <Link to="/">
              <Button state="primary" text="Back" />
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

export default JoinRoom;
