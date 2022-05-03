import React, { Component } from 'react';
import '../styles/Skills.css';
import Skill from './Skill';

const tempData = [
  { id: 1, name: 'html', value: 7 },
  { id: 2, name: 'css', value: 4 },
  { id: 3, name: 'javascript', value: 8 },
  { id: 4, name: 'git', value: 4 },
  { id: 5, name: 'react', value: 2 }
];

class Skills extends Component {
  render() {
    const skillElements = tempData.map(item => (
      <Skill key={item.id} name={item.name} value={item.value} />
    ));
    return <section className="Skills">{skillElements}</section>;
  }
}

export default Skills;
