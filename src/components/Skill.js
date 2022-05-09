import React, { Component } from 'react';
import '../styles/Skill.css';
import Form from './Form';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value,
      formActive: false
    };
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    this.setState(oldState => ({ ...oldState, formActive: true }));
  }

  render() {
    return (
      <div className="Skill edit" onClick={this.showForm}>
        <h3>{this.state.name}</h3>
        <progress
          className="Skill__progress-bar"
          value={this.state.value}
          max="10"
        >
          {this.state.value}%
        </progress>

        {this.state.formActive && (
          <Form
            header="Contact Information's"
            fields={this.state}
            handleSubmit={this.hideForm}
            handleChange={this.changeValue}
          />
        )}
      </div>
    );
  }
}

export default Skill;
