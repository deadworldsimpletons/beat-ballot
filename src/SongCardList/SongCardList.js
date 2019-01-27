import React, { Component } from 'react';
import SongCard from '../SongCard/SongCard.js';
import Swipeout from 'rc-swipeout';
import './swipeout.css';

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
      { this.props.songs.map(song => {
        const innerCard = (<SongCard key={song.id} thumbnail={song.thumbnail} songName={song.name} upVote={song.upvotes} downVote={song.downvotes} onClick={this.clicked(song)} />);
        if (this.props.left || this.props.right) {
          const left = this.props.left.map(c => ({
            ...c,
            onPress: () => c.onSwipe(song),
          }));
          const right = this.props.right.map(c => ({
            ...c,
            onPress: () => c.onSwipe(song),
          }));
          return (
            <Swipeout
              left={left}
              right={right}
            >
              { innerCard }
            </Swipeout>
          )
        } else {
          return innerCard;
        }
      }) }
    </div>
    )
  }
}
export default SongCardList;
