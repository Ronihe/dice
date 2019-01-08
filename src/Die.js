//an individual die that takes props and displays the correct face of the die based on props.
import React, { Component } from 'react';

class Die extends Component {
  render() {
    // const randomNum = Math.floor(Math.random() * 6);
    // class should be this.prop.face - coming from RollDice

    return <i className={this.props.randomClass} />;
  }
}

export default Die;
