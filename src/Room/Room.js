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

  getRoom() {
    lib.nwhacks19.api["@dev"].poll_room(this.props.match.params, (err, res) => {
      if (err) throw err;
      this.setState(res);
    });
  }
  //Room Name
  //Voting Pool as SongCardList
  //Add Suggestion Button -> Search view
  render() {
    //this.getRoom();
    return (
      <div>
        <center>
          <p>{this.props.match.params.room_id}</p>
          <div className="input">
            <input placeholder="Room ID" />
          </div>
          <div className="buttons">
            <Link to="/">
              <Button state="primary" text="Add Suggestion" />
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

export default Room;
