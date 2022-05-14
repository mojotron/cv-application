import photo from './images/cv-photo.png';
import { makeWorkObj, makeEduObj } from './helpers';

const data = {
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
  educations: [makeEduObj()],
  workExperience: [makeWorkObj()],
  formActive: false,
  dataOption: null,
  dataId: null,
  dataDelete: false
};

export default data;
