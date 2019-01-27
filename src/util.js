import React from 'react';
import SongCard from './SongCard/SongCard.js'

const songCardFromSong = song => (
    <SongCard songName={song.name} upVote={song.upvotes} downVote={song.downvotes} />
  );

export { songCardFromSong }
