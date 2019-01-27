import React, { Component } from 'react';
import './ActivePageTest.css';
import Button from '../Button/Button.js';
import Search from '../Search/Search.js';


class ActivePageTest extends Component {

  render() {
    return (
      <Search onClick={alert} />
    );
  }
}

export default ActivePageTest;
