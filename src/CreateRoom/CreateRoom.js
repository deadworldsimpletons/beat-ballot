/*global lib*/
import React, { Component } from 'react';
import './CreateRoom.css';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo.js';

class CreateRoom extends Component {
  state = {
    // TODO: some sort of loading symbol
    qr_data_url: false,
    room_id: false,
    name: '',
  }

  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  createRoom(e) {
    lib.nwhacks19.api['@0.1.0'].create_room({ name: this.state.name }, (err, res) => {
      this.setState(res);
    })
  }

  render() {
    return (
      <div>
        <center>
        { this.state.qr_data_url ?
          <div>
            <img src={this.state.qr_data_url} />
            <div>{this.state.room_id}</div>
          </div>
          :
          <div>
            <Logo />
            <div className = "buttons">
              <br />
              <input onChange={this.updateName} />
              <Button color='red' text='Create a Room' onClick={this.createRoom} />
            </div>
          </div>
        }
        </center>
      </div>
    );
  }
}

export default CreateRoom;
