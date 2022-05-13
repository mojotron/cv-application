import React, { Component } from 'react';
import '../styles/Skills.css';
import SeparationLine from './SeparationLine';

function Skill(props) {
  return (
    <div
      onClick={props.handleForm}
      className="Skill edit"
      data-options="skills"
      data-id={props.id}
    >
      <h3>{props.name}</h3>
      <progress className="Skill__progress-bar" value={props.level} max="10">
        {props.level}%
      </progress>
    </div>
  );
}

class Skills extends Component {
  render() {
    const skillElements = this.props.data.map(skill => (
      <Skill
        key={skill.id}
        name={skill.name}
        level={skill.level}
        id={skill.id}
        handleForm={this.props.handleForm}
      />
    ));

    return (
      <section className="Skills">
        <h2
          className="Skills__heading edit"
          onClick={this.props.handleNewSkill}
        >
          Skills
        </h2>
        <SeparationLine />
        {skillElements}
      </section>
    );
  }
}

export default Skills;
