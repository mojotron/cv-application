import React, { Component } from 'react';
import './styles/App.css';
import photo from './images/cv-photo.png';
import Header from './components/Header';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Educations from './components/Educations';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basic: {
        firstName: 'John',
        lastName: 'Dow',
        jobPosition: 'Frontend Developer',
        imagePath: photo,
        // description key is used for form textbox tag
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi quos deserunt delectus ex nemo eum, optio possimus quisquam quas.`
      },
      contacts: {
        phone: '+(000) 500 1234',
        email: 'johndow@example.com',
        webpage: 'www.john-dow.net',
        address: 'Austin, Texas'
      },
      formActive: false,
      formOptions: ''
    };

    this.handleCallForm = this.handleCallForm.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleCallForm(event) {
    if (this.state.formActive) return;
    this.setState(state => ({
      ...state,
      formActive: true,
      formOptions: event.target.dataset.options
    }));
  }

  handleChangeValue(event) {
    console.log(event.target);
    const { field } = event.target.dataset;
    const { value } = event.target;
    this.setState(state => ({
      ...state,
      [state.formOptions]: { ...state[state.formOptions], [field]: value }
    }));
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.basic} handleForm={this.handleCallForm} />
        <Contact data={this.state.contacts} handleForm={this.handleCallForm} />
        <Skills />
        <WorkExperience />
        <Educations />
        {this.state.formActive && (
          <Form
            title={this.state.formOptions}
            data={this.state[this.state.formOptions]}
            handleChange={this.handleChangeValue}
          />
        )}
      </div>
    );
  }
}

export default App;
