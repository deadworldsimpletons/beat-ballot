import React, { Component } from "react";
<<<<<<< HEAD
import ReactAudioPlayer from "react-audio-player";
import "./Room.css";
=======
>>>>>>> parent of 3348661... Merge branch 'room' into style-fixing
import image from "../tempImages/qr.png";
import Button from "../Button/Button.js";
import SongCardList from "../SongCardList/SongCardList.js";
import Logo from "../Logo/Logo.js";
import config from "../config.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Room extends Component {
  state = {
    name: false,
    voting_pool: [],
    now_playing: false,
    next_playing: false,
    qr: false
  };

  constructor(props) {
    super(props);
    this.getRoom = this.getRoom.bind(this);
  }

  getRoom() {
    config.lib.poll_room(this.props.match.params, (err, res) => {
      if (err) throw err;
      this.setState(res);
    });
  }

  componentDidMount() {
    setInterval(this.getRoom, config.pollInterval);
  }

  //Room Name
  //Voting Pool as SongCardList
  //Add Suggestion Button -> Search view
  render() {
    //this.getRoom();
    return (
      <div>
        <center>
          <div>
            <h1>Now Playing:</h1>
            <SongCardList songs={this.state.now_playing ? [this.state.now_playing] : []} />
            <h1>Up Next:</h1>
            <SongCardList songs={this.state.next_playing ? [this.state.next_playing] : []} />
            <h1>Candidates:</h1>
            { /* TODO: swiping */ }
            <SongCardList songs={this.state.voting_pool} />
          </div>
        </center>
      </div>
    );
//           <p>{this.props.match.params.room_id}</p>
//           <div className="buttons">
//             <Link to="/">
//               <Button state="primary" text="Add Suggestion" />
//             </Link>
//           </div>
//         </center>
//       </div>
//     );
  }
}

export default Room;
