/*global lib*/
import React, { Component } from "react";
import image from "../tempImages/qr.png";
import Button from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Room extends Component {
  state = {
    name: "",
    voting_pool: [],
    now_playing: "",
    qr: ""
  };

  constructor(props) {
    super(props);
    this.getRoom = this.getRoom.bind(this);
  }

  getRoom() {
    lib.nwhacks19.api["@dev"].poll_room(
      this.props.location.state,
      (err, res) => {
        if (err) throw err;
        this.setState(res);
      }
    );
  }

  render() {
    this.getRoom();
    return (
      <div>
        <center>
          <p>{this.state.name}</p>
          <div className="input">
            <input placeholder="Room ID" />
          </div>
          <p>(placeholder)Or scan QR code</p>
          <div className="buttons">
            <Button state="primary" text="Join" />
            <Link to="/">
              <Button state="primary" text="Back" />
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

export default Room;
