import React, { Component } from 'react';
import '../styles/Contacts.css';
import phoneIcon from '../images/telephone-icon.svg';
import emailIcon from '../images/email-icon.svg';
import webIcon from '../images/web-icon.svg';
import locationIcon from '../images/location-icon.svg';

function ContactField(props) {
  return (
    <div
      className="Contact__field edit"
      onClick={props.handleClick}
      data-options="contacts"
    >
      <img className="Contact__field__img" src={props.img} alt="" />
      <p>{props.data}</p>
    </div>
  );
}

class Contacts extends Component {
  render() {
    const { phone, email, webpage, address } = this.props.data;
    return (
      <section className="Contacts">
        <h2>Contact</h2>
        <ContactField
          img={phoneIcon}
          data={phone}
          handleClick={this.props.handleForm}
        />
        <ContactField
          img={emailIcon}
          data={email}
          handleClick={this.props.handleForm}
        />
        <ContactField
          img={webIcon}
          data={webpage}
          handleClick={this.props.handleForm}
        />
        <ContactField
          img={locationIcon}
          data={address}
          handleClick={this.props.handleForm}
        />
      </section>
    );
  }
}

export default Contacts;
