import React, { Component } from 'react';
import SeparationLine from './SeparationLine';

function Work(props) {
  return (
    <div
      className="main-section__item edit"
      data-options="workExperience"
      data-id={props.id}
      onClick={props.handleForm}>
      <h3 className="main-section__item__heading">
        {props.position} | {props.company}
      </h3>
      <p className="main-section__item__period">
        {props.dateStart} - {props.dateEnd}
      </p>
      <p className="description">{props.description}</p>
    </div>
  );
}

class WorkExperience extends Component {
  render() {
    const workElements = this.props.data.map(work => (
      <Work
        key={work.id}
        id={work.id}
        position={work.position}
        company={work.company}
        dateStart={work.dateStart}
        dateEnd={work.dateEnd}
        description={work.description}
        handleForm={this.props.handleForm}
      />
    ));
    return (
      <section className="main-section__container">
        <h2 className="edit" onClick={this.props.handleNewWork}>
          Work Experience
        </h2>
        <SeparationLine />
        {workElements}
      </section>
    );
  }
}

export default WorkExperience;
