import { SkillType } from '../../types/skillType';
import ControlButton from '../ui/ControlButton/ControlButton';
import ProgressBar from '../ui/ProgressBar/ProgressBar';

type PropsType = {
  data: SkillType;
  onDelete: (skillId: string) => void;
  onSelect: (skill: SkillType) => void;
};

function Skill({ data, onDelete, onSelect }: PropsType) {
  return (
    <div className="group">
      <div className="flex justify-between items-center">
        <h3 className="text-md text-slate-600">{data.name}</h3>
        <div className="invisible group-hover:visible flex gap-2">
          <ControlButton control="edit" onClick={() => onSelect(data)} />
          <ControlButton control="delete" onClick={() => onDelete(data.id)} />
        </div>
      </div>
      <ProgressBar currentValue={data.level} maxValue={10} />
    </div>
  );
}

export default Skill;
