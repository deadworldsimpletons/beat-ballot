import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonColor = this.buttonColor.bind(this);
  }
  buttonColor() {
    var color = this.props.color;
    if (color == 'blue') {
      return 'primaryButton';
    }
    if (color == 'red') {
      return 'secondaryButton';
    }
  }
  render() {
    return (
      <button type="button" className={this.buttonColor()} onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default Button;
