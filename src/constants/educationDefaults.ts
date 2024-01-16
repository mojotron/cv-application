import { TimelineItemType } from '../types/timelineItemType';

export const EDUCATION: TimelineItemType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Major',
    institution: 'University',
    dateStart: '2014-09-30',
    dateEnd: '2016-06-15',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Baccalarius',
    institution: 'University',
    dateStart: '2010-09-30',
    dateEnd: '2014-06-15',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium commodi quos deserunt delectus ex nemo eum.',
  },
];
