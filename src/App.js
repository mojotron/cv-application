import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
        <Skills />
        <WorkExperience />
        <Education />
      </div>
    );
  }
}

export default App;
