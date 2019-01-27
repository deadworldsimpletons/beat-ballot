import React, { Component } from 'react';
import './SongCard.css';


class SongCard extends Component {
  render() {
    return (
        <center onClick={this.props.onClick}>
        <div className = "card">

          <div className = "contain">
            <div className = "cover">
              <img src = {this.props.albumCover} />
            </div>

            <div className = "songInfo">
              <span  className='songTitle'> {this.props.songName} </span>
            </div>
          </div>

          <div className = "votes">
            <p> <span  className='upVote'> {this.props.upVote} </span>
            <span> &mdash; </span>
            <span  className='downVote'> {this.props.downVote} </span> </p>
          </div>

        </div>
        </center>
    );
  }
}

export default SongCard;
