import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const { firstName, lastName, jobPosition, imagePath, description } =
      this.props.data;
    return (
      <header className="Header">
        <div className="Header__info">
          <h1 className="Header__name">
            <span
              className="Header__first-name edit"
              onClick={this.props.handleForm}
              data-options="basic"
            >
              {firstName}
            </span>
            <span
              className="Header__last-name edit"
              onClick={this.props.handleForm}
              data-options="basic"
            >
              {lastName}
            </span>
          </h1>
          <h3
            className="Header__job-position edit"
            onClick={this.props.handleForm}
            data-options="basic"
          >
            {jobPosition}
            <span className="Header__line" />
          </h3>
          <p
            className="Header__biography description edit"
            onClick={this.props.handleForm}
            data-options="basic"
          >
            {description}
          </p>
        </div>
        <img
          className="Header__portrait edit"
          src={imagePath}
          alt=""
          onClick={this.props.handleForm}
          data-options="basic"
        />
      </header>
    );
  }
}

export default Header;
