import React, { Component } from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section className="Education">
      <p>Education</p>
    </section>
  );
}

class Educations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="Educations">
        <Education />
      </section>
    );
  }
}

export default Educations;
