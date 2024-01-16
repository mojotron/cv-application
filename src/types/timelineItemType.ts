export type TimelineItemType = {
  id: string;
  title: string;
  institution: string;
  dateStart: string; // format 'YYYY-DD-MM'
  dateEnd: string; // format 'YYYY-DD-MM'
  description: string;
};

export enum TimelineItemEnum {
  title = 'title',
  institution = 'institution',
  description = 'description',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
}
