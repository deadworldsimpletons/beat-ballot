import React, { Component } from 'react';
import './SongCard.css';
import albumArt from '../tempImages/albumCover.png'

class SongCard extends Component {
  render() {
    return (
        <div className = "card">
          <div className = "cover">
            {this.props.albumCover}
            <img src = {albumArt} />
          </div>

          <div className = "songInfo">{this.props.songName} <p>POWER </p> -- <p>KANYE WEST</p></div>
          <div className = "votes">{this.props.upVote} {this.props.downVote}<p> 5 - 3</p></div>
        </div>
    );
  }
}

export default SongCard;
