import { TimelineItemType } from '../types/timelineItemType';

export const EXPERIENCE: TimelineItemType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Senior React Developer',
    institution: 'Awesome Company',
    dateStart: new Date('2020-09-30'),
    dateEnd: null,
    description: 'Finished in top class.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Junior React Developer',
    institution: 'Awesome Company',
    dateStart: new Date('2016-09-30'),
    dateEnd: new Date('2020-06-15'),
    description: 'Finished in top class.',
  },
];
