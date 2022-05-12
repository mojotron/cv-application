import React, { Component } from 'react';
import '../styles/Skill.css';

class Skill extends Component {
  render() {
    return (
      <div
        onClick={this.props.handleForm}
        className="Skill edit"
        data-options="skills"
        data-id={this.props.id}
      >
        <h3>{this.props.name}</h3>
        <progress
          className="Skill__progress-bar"
          value={this.props.level}
          max="10"
        >
          {this.props.level}%
        </progress>
      </div>
    );
  }
}

export default Skill;
