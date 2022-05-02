import React, { Component } from 'react';
import '../styles/Contacts.css';
import phoneIcon from '../images/telephone-icon.svg';
import emailIcon from '../images/email-icon.svg';
import webIcon from '../images/web-icon.svg';
import locationIcon from '../images/location-icon.svg';

function ContactField(props) {
  return (
    <div className="Contact__field">
      <img className="Contact__field__img" src={props.img} alt="" />
      <p>{props.data}</p>
    </div>
  );
}

class Contacts extends Component {
  render() {
    return (
      <section className="Contacts">
        <h2>Contact</h2>
        <ContactField img={phoneIcon} data="+(000) 500 1234" />
        <ContactField img={emailIcon} data="johndow@example.com" />
        <ContactField img={webIcon} data="www.john-dow.net" />
        <ContactField img={locationIcon} data="Austin, Texas" />
      </section>
    );
  }
}

export default Contacts;
