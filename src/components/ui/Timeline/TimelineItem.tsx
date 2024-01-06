import { TimelineItemType } from '../../../types/timelineItemType';

const formatDate = (date: Date | null) => {
  if (date === null) return null;
  return new Intl.DateTimeFormat(navigator.language, {
    month: 'short',
    year: 'numeric',
  }).format(date);
};

type PropsType = {
  data: TimelineItemType;
  editOn: boolean;
  onSelect: (item: TimelineItemType) => void;
};

function TimelineItem({ data, editOn, onSelect }: PropsType) {
  const formattedDateStart = formatDate(new Date(data.dateStart));
  const formattedDateEnd = formatDate(new Date(data.dateEnd));
  return (
    <li className="pl-[20px] before:w-[20px] before:h-[20px] before:bg-slate-800 before:block before:relative before:top-[25px] before:right-[48px] before:rounded-full before:opacity-25 ">
      <header className="flex gap-2 text-lg capitalize font-bold text-slate-600 mb-2">
        <h2>{data.title}</h2>
        <span>|</span>
        <h2>{data.institution}</h2>
      </header>
      <div className="flex flex-col gap-1">
        <p className="text-md text-slate-500">
          {formattedDateStart} - {formattedDateEnd}
        </p>
        <p className="text-md text-slate-600">{data.description}</p>
      </div>
      {editOn && (
        <button type="button" onClick={() => onSelect(data)}>
          select
        </button>
      )}
    </li>
  );
}

export default TimelineItem;
