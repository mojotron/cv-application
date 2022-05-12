import React, { Component } from 'react';
import '../styles/Education.css';

function Education(props) {
  return (
    <section
      className="Education edit"
      data-options="educations"
      data-id={props.id}
      onClick={props.handleForm}
    >
      <h3>
        {props.title} | {props.university}
      </h3>
      <span>{props.dateStart}</span> - <span>{props.dateEnd}</span>
      <p>{props.description}</p>
    </section>
  );
}

class Educations extends Component {
  render() {
    const educationElements = this.props.data.map(edu => (
      <Education
        key={edu.id}
        id={edu.id}
        title={edu.title}
        university={edu.university}
        dateStart={edu.dateStart}
        dateEnd={edu.dateEnd}
        description={edu.description}
        handleForm={this.props.handleForm}
      />
    ));
    return (
      <section className="Educations">
        <h2 className="edit" onClick={this.props.handleNewEducation}>
          Education
        </h2>
        {educationElements}
      </section>
    );
  }
}

export default Educations;
