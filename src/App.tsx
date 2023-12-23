import { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Educations from './components/Educations';
import Form from './components/Form';
import data from './data.js';
import {
  formatDate,
  makeEduObj,
  makeSkillObj,
  makeWorkObj,
} from './helpers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
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
      dataDelete: deleteBtn,
    }));
  }

  handleCloseForm(event) {
    event.preventDefault();
    this.setState(state => ({
      ...state,
      formActive: false,
      dataOption: null,
      dataId: null,
      dataDelete: false,
    }));
  }

  handleChangeValue(event) {
    const { field } = event.target.dataset;
    let { value } = event.target;

    if (field === 'dateStart' || field === 'dateEnd')
      value = formatDate(value);

    if (this.state.dataId) {
      const filtered = this.state[this.state.dataOption].map(ele =>
        ele.id !== this.state.dataId ? ele : { ...ele, [field]: value },
      );

      this.setState(state => ({
        ...state,
        [state.dataOption]: [...filtered],
      }));
    } else {
      this.setState(state => ({
        ...state,
        [state.dataOption]: { ...state[state.dataOption], [field]: value },
      }));
    }
  }

  handleAddNewSkill() {
    if (this.state.skills.find(skill => skill.name === 'skill')) return;
    this.setState(state => ({
      ...state,
      skills: [...state.skills, makeSkillObj()],
    }));
  }

  handleAddNewWork() {
    this.setState(state => ({
      ...state,
      workExperience: [...state.workExperience, makeWorkObj()],
    }));
  }

  handleAddNewEducation() {
    this.setState(state => ({
      ...state,
      educations: [...state.educations, makeEduObj()],
    }));
  }

  handleDeleteItem() {
    const filtered = this.state[this.state.dataOption].filter(
      item => item.id !== this.state.dataId,
    );
    this.setState(state => ({
      ...state,
      [state.dataOption]: filtered,
      formActive: false,
      dataOption: null,
      dataId: null,
      dataDelete: false,
    }));
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.basic} handleForm={this.handleCallForm} />
        <section className="side-section">
          <Contacts
            data={this.state.contacts}
            handleForm={this.handleCallForm}
          />
          <Skills
            data={this.state.skills}
            handleNewSkill={this.handleAddNewSkill}
            handleForm={this.handleCallForm}
          />
        </section>
        <section className="main-section">
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
        </section>

        {this.state.formActive && this.state.dataId && (
          <Form
            title={this.state.dataOption}
            data={this.state[this.state.dataOption].find(
              ele => ele.id === this.state.dataId,
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
