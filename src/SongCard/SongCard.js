import React, { Component } from 'react';
import './SongCard.css';


class SongCard extends Component {
  render() {
    return (
        <div className = "card">
          <div className = "cover">
            <img src = {this.props.albumCover} />
          </div>
          <div className = "songInfo">
            <p> {this.props.artist}</p>
            <p> &mdash; </p>
            <p>{this.props.songName}</p>
          </div>

          <div className = "votes">
            <p>{this.props.upVote}</p>
            <p> &mdash; </p>
            <p>{this.props.downVote}</p>
          </div>

        </div>
    );
  }
}

export default SongCard;
