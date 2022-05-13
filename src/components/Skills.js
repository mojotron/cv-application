import React, { Component } from 'react';
import '../styles/Skills.css';
import SeparationLine from './SeparationLine';
import Skill from './Skill';

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
