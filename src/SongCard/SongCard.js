import React, { Component } from 'react';
import './SongCard.css';


class SongCard extends Component {
  render() {
    return (
        <div className = "card">
          <div className = "cover">
            <img src = {this.props.albumCover} />
          </div>
          <div className = "songInfo"><p>{this.props.artist}</p> <p> &mdash; </p> {this.props.songName}</div>
          <div className = "votes">{this.props.upVote} <p> &mdash; </p> {this.props.downVote}</div>
        </div>
    );
  }
}

export default SongCard;
