import React, { Component } from 'react';
import config from '../config.js'
import './Search.css';
import SongCardList from '../SongCardList/SongCardList.js';

class Search extends Component {
  state = {
    q: '',
    results: [],
  }

  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(e) {
    const q = e.target.value;
    this.setState({ q })
    config.lib.search({ q }, (err, res) => {
      if (err) throw err;
      this.setState({ results: res });
    });
  }

  render() {
    return (
      <div>
        <center>
        <input placeholder="Search..." onChange={this.doSearch} />
        <SongCardList songs={this.state.results} onClick={this.props.onClick} />
        </center>
      </div>
    );
  }
}

export default Search;
