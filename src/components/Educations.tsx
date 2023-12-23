import React, { Component } from 'react';
import SeparationLine from './SeparationLine';

function Education(props) {
  return (
    <section
      className="main-section__item edit"
      data-options="educations"
      data-id={props.id}
      onClick={props.handleForm}
    >
      <h3 className="main-section__item__heading">
        {props.title} | {props.university}
      </h3>
      <p className="main-section__item__period">
        {props.dateStart} - {props.dateEnd}
      </p>
      <p className="description">{props.description}</p>
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
      <section className="main-section__container">
        <h2 className="edit" onClick={this.props.handleNewEducation}>
          Education
        </h2>
        <SeparationLine />
        {educationElements}
      </section>
    );
  }
}

export default Educations;
