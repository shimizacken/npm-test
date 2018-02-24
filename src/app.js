import React, { Component } from 'react';
import './styles/button.scss';

export class Button extends Component {

  render() {

    return(
      <button onClick={this.props.onClick}>
          {this.props.text}
      </button>
    );
  }
}