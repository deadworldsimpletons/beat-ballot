import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import image from "../tempImages/qr.png";
import Button from "../Button/Button.js";
import SongCardList from "../SongCardList/SongCardList.js";
import Search from "../Search/Search.js";
import Logo from "../Logo/Logo.js";
import config from "../config.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Room extends Component {
  state = {
    name: false,
    voting_pool: [],
    already_voted_ids: {},
    now_playing: false,
    next_playing: false,
    qr: false,
  };

  constructor(props) {
    super(props);
    this.getRoom = this.getRoom.bind(this);
    this.addSuggestion = this.addSuggestion.bind(this);
    this.playNext = this.playNext.bind(this);

    this.room_id = this.props.match.params.room_id;
    this.is_owner = !!this.props.match.params.is_owner;
  }

  getRoom() {
    config.lib.poll_room({ room_id: this.room_id }, (err, res) => {
      if (err) throw err;
      this.setState(res);
    });
  }

  addSuggestion(song) {
    config.lib.add_suggestion(
      { room_id: this.room_id, suggestion: song },
      (err, res) => {
        if (err) throw err;
      }
    );
  }

  playNext() {
    config.lib.play_next({ room_id: this.room_id }, (err, res) => {
      if (err) throw err;
    });
  }

  vote(is_upvote) {
    return song => {
      config.lib.vote({ room_id: this.room_id, song_id: song.id, is_upvote }, (err, res) => {
        if (err) throw err;
      });
      this.setState({already_voted_ids: {...this.state.already_voted_ids, [song.id]: true}});
    }
  }

  componentDidMount() {
    this.getRoom();
    setInterval(this.getRoom, config.pollInterval);
  }

  render() {
    const relevant_voting_pool = this.state.voting_pool.filter(c => !this.state.already_voted_ids[c.id]);
    return (
      <div>
        <center>
          <div>
            <h1>Now Playing:</h1>
            {this.is_owner && this.state.now_playing && (
              <ReactAudioPlayer
                autoPlay
                controls
                src={config.yasBase + this.state.now_playing.id}
                onEnded={this.playNext}
              />
            )}
            <SongCardList
              songs={this.state.now_playing ? [this.state.now_playing] : []}
            />
            <h1>Up Next:</h1>
            <SongCardList
              songs={this.state.next_playing ? [this.state.next_playing] : []}
            />
            <h1>Candidates:</h1>
            { /* TODO: swiping */ }
            <SongCardList songs={relevant_voting_pool} left={[{
              text: "✔",
              onSwipe: this.vote(true),
              style: { backgroundColor: 'lightgreen', color: 'white' },
            }]} right={[{
              text: "✗",
              onSwipe: this.vote(false),
              style: { backgroundColor: 'red', color: 'white' },
            }]}/>
            <Search onClick={this.addSuggestion} />
          </div>
        </center>
      </div>
    );
  }
}

export default Room;
