import React, { Component } from 'react';
import SongCard from '../SongCard/SongCard.js';

class SongCardList extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }

  clicked(song) {
    return typeof this.props.onClick === 'function' ? () => this.props.onClick(song) : () => true;
  }

  render() {
    return (
      <div>
      { this.props.songs.map(song =>
        <SongCard key={song.id} songName={song.name} upVote={song.upvotes} downVote={song.downvotes} onClick={this.clicked(song)} />
      ) }
    </div>
    )
  }
}
export default SongCardList;
