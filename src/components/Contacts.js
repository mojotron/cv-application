import React, { Component } from 'react';
import '../styles/Contacts.css';
import phoneIcon from '../images/telephone-icon.svg';
import emailIcon from '../images/email-icon.svg';
import webIcon from '../images/web-icon.svg';
import locationIcon from '../images/location-icon.svg';
import SeparationLine from './SeparationLine';

function ContactField(props) {
  return (
    <div
      className="Contact__field edit"
      onClick={props.handleForm}
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
        <SeparationLine />
        <ContactField
          img={phoneIcon}
          data={phone}
          handleForm={this.props.handleForm}
        />
        <ContactField
          img={emailIcon}
          data={email}
          handleForm={this.props.handleForm}
        />
        <ContactField
          img={webIcon}
          data={webpage}
          handleForm={this.props.handleForm}
        />
        <ContactField
          img={locationIcon}
          data={address}
          handleForm={this.props.handleForm}
        />
      </section>
    );
  }
}

export default Contacts;
