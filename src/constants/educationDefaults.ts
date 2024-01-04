import { TimelineItemType } from '../types/timelineItemType';

export const EDUCATION: TimelineItemType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Major',
    institution: 'University',
    dateStart: new Date('2020-09-30'),
    dateEnd: null,
    description: 'Finished in top class.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Major',
    institution: 'University',
    dateStart: new Date('2016-09-30'),
    dateEnd: new Date('2020-06-15'),
    description: 'Finished in top class.',
  },
];
