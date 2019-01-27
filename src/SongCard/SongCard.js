import React, { Component } from 'react';
import './SongCard.css';


class SongCard extends Component {
  render() {
    return (
        <center>
        <div className = "card">

          <div className = "contain">
            <div className = "cover">
              <img src = {this.props.albumCover} />
            </div>

            <div className = "songInfo">
              <p> <span className='artist'> {this.props.artist} </span>
              <span> &mdash; </span>
              <span  className='songTitle'> {this.props.songName} </span> </p>
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
