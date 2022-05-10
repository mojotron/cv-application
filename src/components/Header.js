import React from 'react';
import '../styles/Header.css';
import Form from './Form';
import photo from '../images/cv-photo-small.png';

function Header(props) {
  const [state, setState] = React.useState({
    firstName: 'John',
    lastName: 'Smith',
    position: 'Frontend Developer',
    imageUrl: photo,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Perspiciatis ea officiis esse earum rerum vitae unde maxime fugit!
    Sed odit aliquam voluptatem praesentium nemo molestiae nobis tempore
    corporis. Iure possimus ab, quas magni facilis quisquam libero est!
    Nam reprehenderit corporis beatae, commodi eligendi in officiis,
    voluptatibus ut itaque asperiores, adipisci saepe fugiat similique
    soluta veritatis architecto eos? Explicabo voluptas unde voluptates
    beatae deleniti reprehenderit incidunt illo excepturi repellat
    consectetur, ipsum ratione eligendi facilis autem earum impedit qui
    ullam quae!`
  });

  function changeValue(e) {
    const { name, value } = e.target;
    setState(oldState => ({ ...oldState, [name]: value }));
  }

  return (
    <header className="Header">
      <div className="Header__info">
        <h1 className="Header__name">
          <span
            className="Header__first-name edit"
            onClick={props.handleShowForm}
          >
            {state.firstName}
          </span>
          <span
            className="Header__last-name edit"
            onClick={props.handleShowForm}
          >
            {state.lastName}
          </span>
        </h1>
        <h3 className="Header__job-position">
          {state.position}
          <span className="Header__line" />
        </h3>
        <p className="Header__biography edit" onClick={props.handleShowForm}>
          {state.description}
        </p>
      </div>

      <img
        className="Header__portrait edit"
        src={state.imageUrl}
        alt="user portrait"
        onClick={props.handleShowForm}
      />

      {props.formActive && (
        <Form
          header="Personal Information's"
          fields={state}
          handleSubmit={props.handleHideForm}
          handleChange={changeValue}
        />
      )}
    </header>
  );
}

export default Header;
