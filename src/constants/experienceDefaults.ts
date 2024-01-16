import { TimelineItemType } from '../types/timelineItemType';

export const EXPERIENCE: TimelineItemType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Senior React Developer',
    institution: 'Awesome Company',
    dateStart: '2020-09-30',
    dateEnd: '',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi quos deserunt delectus ex nemo eum, optio possimus quisquam quas.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Junior React Developer',
    institution: 'Awesome Company',
    dateStart: '2016-09-30',
    dateEnd: '2020-06-15',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];
