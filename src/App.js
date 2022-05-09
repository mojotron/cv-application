import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Educations from './components/Educations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
        <Skills />
        <WorkExperience />
        <Educations />
      </div>
    );
  }
}

export default App;
