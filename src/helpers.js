import uniqid from 'uniqid';

const loremTemp = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`;

export const splitOnCamelCase = string =>
  string
    .split(/(?=[A-Z])/)
    .map(s => s.toLowerCase())
    .join(' ');

export const formatDate = string =>
  new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(string));

export const makeEduObj = () => ({
  id: uniqid(),
  title: 'Major Degree / Title',
  university: 'University',
  dateStart: 'November 2015',
  dateEnd: 'July 2020',
  description: loremTemp
});

export const makeWorkObj = () => ({
  id: uniqid(),
  position: 'Position',
  company: 'Company',
  dateStart: 'August 2020',
  dateEnd: 'February 2022',
  description: loremTemp
});

export const makeSkillObj = () => ({
  name: 'skill',
  level: 0,
  id: uniqid()
});
