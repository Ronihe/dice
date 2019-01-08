//renders the dice and a button to roll.

import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0
    };
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    die: [
      'fas fa-dice-one',
      'fas fa-dice-two',
      'fas fa-dice-three',
      'fas fa-dice-four',
      'fas fa-dice-five',
      'fas fa-dice-six'
    ]
  };

  roll() {
    // return the two  li of the dice to the page
    this.setState({
      num1: Math.floor(Math.random() * 6),
      num2: Math.floor(Math.random() * 6)
    });

    // fa fa-dice-{dieImgs[i]}
  }
  render() {
    return (
      <div className="container">
        <Die randomClass={this.props.die[this.state.num1]} />
        <Die randomClass={this.props.die[this.state.num2]} />
        <div>
          <button onClick={this.roll}> Roll the dice </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
