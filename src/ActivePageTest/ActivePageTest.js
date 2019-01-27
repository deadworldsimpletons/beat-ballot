import React, { Component } from 'react';
import './ActivePageTest.css';
import Button from '../Button/Button.js';
import SongCard from '../SongCard/SongCard.js';
import albumArt from '../tempImages/albumCover.png'

class ActivePageTest extends Component {

  render() {
    return (
      <SongCard artist='Kanye West' songName = 'Power'  upVote ='5' downVote='2' albumCover ={ albumArt} />
    );
  }
}

export default ActivePageTest;
