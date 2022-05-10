import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Educations from './components/Educations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { formActive: false };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formActive: true });
  }

  hideForm() {
    this.setState({ formActive: false });
  }

  render() {
    return (
      <div className="App">
        <Header
          handleShowForm={this.showForm}
          handleHideForm={this.hideForm}
          formActive={this.state.formActive}
        />
        <Contact
          handleShowForm={this.showForm}
          handleHideForm={this.hideForm}
          formActive={this.state.formActive}
        />
        <Skills />
        <WorkExperience />
        <Educations />
      </div>
    );
  }
}

export default App;
