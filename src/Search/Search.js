/*global lib*/
import React, { Component } from "react";
import config from "../config.js";
import "./Search.css";
import SongCardList from "../SongCardList/SongCardList.js";
import Button from "../Button/Button.js";

class Search extends Component {
  state = {
    q: "",
    results: false
  };

  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  doSearch(e) {
    lib.nwhacks19.api["@dev"].search({ q: this.state.q }, (err, res) => {
      if (err) throw err;
      this.setState({ results: res });
    });
  }

  updateQuery(e) {
    this.setState({ q: e.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <div>
            <input placeholder="Search..." onChange={this.updateQuery} />
            <Button state="secondary" text="Search" onClick={this.doSearch} />
          </div>
          {this.state.results && (
            <div>
              <SongCardList
                songs={this.state.results}
                onClick={this.props.onClick}
              />
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default Search;
