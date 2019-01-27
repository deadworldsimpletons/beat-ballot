import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonState = this.buttonState.bind(this);
  }
  buttonState() {
    var state = this.props.state;
    if (state == 'primary') {
      return 'primaryButton';
    }
    if (state == 'secondary') {
      return 'secondaryButton';
    }
  }
  render() {
    return (
      <button type="button" className={this.buttonState()} onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default Button;
