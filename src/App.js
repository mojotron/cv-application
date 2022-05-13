import React, { Component } from 'react';
import uniqid from 'uniqid';
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
      skills: [
        { name: 'html', level: 7, id: '123' },
        { name: 'css', level: 5, id: '234' },
        { name: 'javascript', level: 8, id: '456' }
      ],
      educations: [
        {
          id: '123',
          title: 'Engineer',
          university: 'University',
          dateStart: 'November 2011',
          dateEnd: 'July 2015',
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi quos deserunt delectus ex nemo eum, optio possimus quisquam quas.`
        }
      ],
      workExperience: [
        {
          id: '123',
          position: 'Junior Frontend Developer',
          company: 'Fluffy Web Company',
          dateStart: 'May 2015',
          dateEnd: 'February 2018',
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi quos deserunt delectus ex nemo eum, optio possimus quisquam quas.`
        }
      ],
      formActive: false,
      dataOption: null,
      dataId: null,
      dataDelete: false
    };

    this.handleCallForm = this.handleCallForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleAddNewSkill = this.handleAddNewSkill.bind(this);
    this.handleAddNewWork = this.handleAddNewWork.bind(this);
    this.handleAddNewEducation = this.handleAddNewEducation.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleCallForm(event) {
    if (this.state.formActive) return;

    const option =
      event.target.dataset.options ||
      event.target.parentElement.dataset.options;

    const id =
      event.target.dataset.id || event.target.parentElement.dataset.id || null;

    const deleteBtn = !['basic', 'contacts'].includes(option);

    this.setState(state => ({
      ...state,
      formActive: true,
      dataOption: option,
      dataId: id,
      dataDelete: deleteBtn
    }));
  }

  handleCloseForm(event) {
    event.preventDefault();
    this.setState(state => ({
      ...state,
      formActive: false,
      dataOption: null,
      dataId: null,
      dataDelete: false
    }));
  }

  handleChangeValue(event) {
    const { field } = event.target.dataset;
    const { value } = event.target;
    if (this.state.dataId) {
      const filtered = this.state[this.state.dataOption].map(ele =>
        ele.id !== this.state.dataId ? ele : { ...ele, [field]: value }
      );

      this.setState(state => ({
        ...state,
        [state.dataOption]: [...filtered]
      }));
    } else {
      this.setState(state => ({
        ...state,
        [state.dataOption]: { ...state[state.dataOption], [field]: value }
      }));
    }
  }

  handleAddNewSkill() {
    if (this.state.skills.find(skill => skill.name === 'skill')) return;
    this.setState(state => ({
      ...state,
      skills: [...state.skills, { name: 'skill', level: 0, id: uniqid() }]
    }));
  }

  handleAddNewWork() {
    this.setState(state => ({
      ...state,
      workExperience: [
        ...state.workExperience,
        {
          id: uniqid(),
          position: 'Junior Frontend Developer',
          company: 'Fluffy Web Company',
          dateStart: 'May 2015',
          dateEnd: 'February 2018',
          description: `Lorem ipsum, dolor sit amet consectetur`
        }
      ]
    }));
  }

  handleAddNewEducation() {
    this.setState(state => ({
      ...state,
      educations: [
        ...state.educations,
        {
          id: uniqid(),
          title: 'Engineer',
          university: 'University',
          dateStart: 'November 2011',
          dateEnd: 'July 2015',
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
        }
      ]
    }));
  }

  handleDeleteItem() {
    const filtered = this.state[this.state.dataOption].filter(
      item => item.id !== this.state.dataId
    );
    this.setState(state => ({
      ...state,
      [state.dataOption]: filtered,
      formActive: false,
      dataOption: null,
      dataId: null,
      dataDelete: false
    }));
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.basic} handleForm={this.handleCallForm} />
        <Contact data={this.state.contacts} handleForm={this.handleCallForm} />
        <Skills
          data={this.state.skills}
          handleNewSkill={this.handleAddNewSkill}
          handleForm={this.handleCallForm}
        />
        <WorkExperience
          data={this.state.workExperience}
          handleNewWork={this.handleAddNewWork}
          handleForm={this.handleCallForm}
        />
        <Educations
          data={this.state.educations}
          handleNewEducation={this.handleAddNewEducation}
          handleForm={this.handleCallForm}
        />

        {this.state.formActive && this.state.dataId && (
          <Form
            title={this.state.dataOption}
            data={this.state[this.state.dataOption].find(
              ele => ele.id === this.state.dataId
            )}
            handleChange={this.handleChangeValue}
            handleSubmit={this.handleCloseForm}
            delete={this.state.dataDelete}
            handleDelete={this.handleDeleteItem}
          />
        )}

        {this.state.formActive && !this.state.dataId && (
          <Form
            title={this.state.dataOption}
            data={this.state[this.state.dataOption]}
            handleChange={this.handleChangeValue}
            handleSubmit={this.handleCloseForm}
          />
        )}
      </div>
    );
  }
}

export default App;
