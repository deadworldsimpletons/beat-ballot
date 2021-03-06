/*global lib*/
import React, { Component } from "react";
import "./CreateRoom.css";
import Button from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import config from "../config.js";

class CreateRoom extends Component {
  state = {
    // TODO: some sort of loading symbol
    qr_data_url: false,
    room_id: false,
    name: ""
  };

  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  updateName(e) {
    this.setState({ name: e.target.value });
  }

  createRoom(e) {
    config.lib.create_room(
      { name: this.state.name },
      (err, res) => {
        this.setState(res);
      }
    );
  }

  //params ???
  render() {
    return (
      <div>
        <center>
          {this.state.qr_data_url ? (
            <div>
              <Logo />
              <span className="qrCode">
                <img src={this.state.qr_data_url} className="qrImg" />
                <p>Scan to Join</p>
                <div className="roomIdName">{this.state.room_id}</div>
                <div className="buttons">
                  <Link to={`/Room/${this.state.room_id}/true`}>
                    <Button state="primary" text="Continue to Room" />
                  </Link>
                </div>
              </span>
            </div>
          ) : (
            <div className="containLogo">
              <Logo />
              <div className="buttons">
                <br />
                <br />
                <input
                  placeholder="Enter Room Name"
                  onChange={this.updateName}
                />
                <Button
                  state="secondary"
                  text="Create a Room"
                  onClick={this.createRoom}
                />
              </div>
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default CreateRoom;
