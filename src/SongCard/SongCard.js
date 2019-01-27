import React, { Component } from 'react';
import './SongCard.css';

class SongCard extends Component {
  render() {
    return (
        <div className = "card">
          <div className = "cover">{this.props.albumCover}</div>
          <div className = "songInfo">{this.props.songName}</div>
          <div className = "votes">{this.props.upVote} {this.props.downVote}</div>

        </div>
    );
  }
}

export default SongCard;
