import React, { Component } from 'react';
import '../styles/Skill.css';

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Skill">
        <h3>{this.props.name}</h3>
        <progress
          className="Skill__progress-bar"
          value={this.props.value}
          max="10"
        >
          {this.props.value}%
        </progress>
      </div>
    );
  }
}

export default Skill;
