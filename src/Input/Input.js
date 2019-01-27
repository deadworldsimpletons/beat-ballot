import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.ifError = this.ifError.bind(this);
  }

  ifError() {
    const error = this.props.ifError;
    if (error) {
      return 'error';
    } else {
      return 'input';
    }
  }


  render() {
    return (

    );
  }
}

export default Input;
