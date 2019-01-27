import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage.js';
import CreateRoom from './CreateRoom/CreateRoom.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function indexPage() {
    return (
      <div>
        <Link to='/CreateRoom'>CreateRoom</Link>
        <LandingPage />
      </div>
    );
}

function aboutPage() {
    return (
      <div>
        <CreateRoom />
      </div>
    );
}

function usersPage() {
    return (
      <div>
        <p>Users</p>
      </div>
    );
}

class App extends Component {
  render() {
    return (
        <Router>
        <div>
         <Route exact path="/" exact component={indexPage} />
         <Route exact path="/CreateRoom/" component={aboutPage} />
         <Route exact path="/users/" component={usersPage} />
        </div>
        </Router>
    );
  }
}

export default App;
