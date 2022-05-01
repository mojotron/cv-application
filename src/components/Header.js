import React, { Component } from 'react';
import '../styles/Header.css';
import photo from '../images/cv-photo-small.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__info">
          <h1 className="Header__name">
            <span className="Header__first-name">John</span>
            <span className="Header__last-name">Smith</span>
          </h1>
          <h3 className="Header__job-position">
            Frontend Developer
            <span className="Header__line" />
          </h3>
          <p className="Header__biography">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis ea officiis esse earum rerum vitae unde maxime fugit!
            Sed odit aliquam voluptatem praesentium nemo molestiae nobis
            tempore corporis. Iure possimus ab, quas magni facilis quisquam
            libero est! Nam reprehenderit corporis beatae, commodi eligendi in
            officiis, voluptatibus ut itaque asperiores, adipisci saepe fugiat
            similique soluta veritatis architecto eos? Explicabo voluptas unde
            voluptates beatae deleniti reprehenderit incidunt illo excepturi
            repellat consectetur, ipsum ratione eligendi facilis autem earum
            impedit qui ullam quae!
          </p>
        </div>
        <figure className="Header__portrait">
          <img src={photo} alt="user portrait" />
        </figure>
      </header>
    );
  }
}

export default Header;
