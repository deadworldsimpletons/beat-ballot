import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage.js";
import CreateRoom from "./CreateRoom/CreateRoom.js";
import JoinRoom from "./JoinRoom/JoinRoom.js";
import ActivePageTest from "./ActivePageTest/ActivePageTest.js";
import Room from "./Room/Room.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function indexPage() {
    return (
      <div>
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
      <JoinRoom />
    </div>
  );
}

function activePage() {
  return (
    <div>
      <ActivePageTest />
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
          <Route exact path="/JoinRoom/" component={usersPage} />
          <Route exact path="/ActivePageTest/" component={activePage} />
          <Route exact path="/Room/:room_id/:is_owner?" component={Room} />
        </div>
      </Router>
    );
  }
}

export default App;
