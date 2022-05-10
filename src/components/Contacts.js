import React, { Component } from 'react';
import '../styles/Contacts.css';
import phoneIcon from '../images/telephone-icon.svg';
import emailIcon from '../images/email-icon.svg';
import webIcon from '../images/web-icon.svg';
import locationIcon from '../images/location-icon.svg';
import Form from './Form';

function ContactField(props) {
  return (
    <div className="Contact__field edit" onClick={props.handleClick}>
      <img className="Contact__field__img" src={props.img} alt="" />
      <p>{props.data}</p>
    </div>
  );
}

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '+(000) 500 1234',
      email: 'johndow@example.com',
      webpage: 'www.john-dow.net',
      address: 'Austin, Texas'
    };
    // this.showForm = this.showForm.bind(this);
    // this.hideForm = this.hideForm.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  // showForm() {
  //   this.setState(oldState => ({ ...oldState, formActive: true }));
  // }

  // hideForm(e) {
  //   e.preventDefault();
  //   this.setState(oldState => ({ ...oldState, formActive: false }));
  // }

  changeValue(e) {
    const { name, value } = e.target;
    this.setState(oldState => ({ ...oldState, [name]: value }));
  }

  render() {
    return (
      <section className="Contacts">
        <h2>Contact</h2>
        <ContactField
          img={phoneIcon}
          data={this.state.phone}
          handleClick={this.props.handleShowForm}
        />
        <ContactField
          img={emailIcon}
          data={this.state.email}
          handleClick={this.showForm}
        />
        <ContactField
          img={webIcon}
          data={this.state.webpage}
          handleClick={this.showForm}
        />
        <ContactField
          img={locationIcon}
          data={this.state.address}
          handleClick={this.showForm}
        />

        {this.props.formActive && (
          <Form
            header="Contact Information's"
            fields={this.state}
            handleSubmit={this.hideForm}
            handleChange={this.changeValue}
          />
        )}
      </section>
    );
  }
}

export default Contacts;
