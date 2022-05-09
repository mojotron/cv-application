import React, { Component } from 'react';
import '../styles/Skills.css';
import Skill from './Skill';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { name: 'html', value: 7 },
        { name: 'css', value: 4 },
        { name: 'javascript', value: 8 },
        { name: 'git', value: 4 },
        { name: 'react', value: 2 }
      ]
    };
    this.addSkill = this.addSkill.bind(this);
  }

  addSkill() {
    if (this.state.skills.find(skill => skill.name === 'skill')) {
      alert("update existing skill named 'skill'");
      return;
    }
    this.setState(oldState => ({
      ...oldState,
      skills: [...oldState.skills, { name: `skill`, value: 0 }]
    }));
  }

  render() {
    const skillElements = this.state.skills.map(item => (
      <Skill key={item.name} name={item.name} value={item.value} />
    ));
    return (
      <section className="Skills">
        <h2 className="Skills__heading edit" onClick={this.addSkill}>
          Skills
        </h2>
        {skillElements}
      </section>
    );
  }
}

export default Skills;
