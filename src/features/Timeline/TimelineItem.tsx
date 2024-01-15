import { TimelineItemType } from '../../types/timelineItemType';
import ControlButton from '../../components/ui/ControlButton/ControlButton';

const formatDate = (date: string) => {
  if (date === '') return null;

  return new Intl.DateTimeFormat(navigator.language, {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
};

type PropsType = {
  data: TimelineItemType;
  editOn: boolean;
  onSelect: (item: string) => void;
  onDelete: (item: string) => void;
};

function TimelineItem({ data, editOn, onSelect, onDelete }: PropsType) {
  const formattedDateStart = formatDate(data.dateStart);
  const formattedDateEnd = formatDate(data.dateEnd);
  return (
    <li className="pl-[20px] before:w-[20px] before:h-[20px] before:bg-neutral-600 before:block before:relative before:top-[25px] before:right-[48px] before:rounded-full before:opacity-30 ">
      <header className="flex flex-wrap gap-2 text-md capitalize font-bold text-slate-500 mb-2">
        <h2>{data.title}</h2>
        <span>|</span>
        <h2>{data.institution}</h2>
      </header>
      <div className="flex justify-between gap-1">
        <div className="flex flex-col gap-2">
          <p className="text-md text-slate-400">
            {formattedDateStart} - {formattedDateEnd}
          </p>
          <p className="text-md text-slate-500">{data.description}</p>
        </div>
        {editOn && (
          <div className="flex flex-col gap-2">
            <ControlButton control="edit" onClick={() => onSelect(data.id)} />
            <ControlButton
              control="delete"
              onClick={() => onDelete(data.id)}
            />
          </div>
        )}
      </div>
    </li>
  );
}

export default TimelineItem;
