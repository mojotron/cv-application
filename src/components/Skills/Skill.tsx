import { useCvStore } from '../../store';
import { SkillType } from '../../types/skillType';
import ControlButton from '../ui/ControlButton/ControlButton';
import ProgressBar from '../ui/ProgressBar/ProgressBar';

type PropsType = {
  data: SkillType;
  onDelete: (skillId: string) => void;
};

function Skill({ data, onDelete }: PropsType) {
  const setSelectedSkill = useCvStore((state) => state.setSelectedSkill);

  return (
    <li className="group">
      <div className="flex justify-between items-center">
        <h3 className="text-md text-slate-600">{data.name}</h3>
        <div className="invisible group-hover:visible flex gap-2">
          <ControlButton
            control="edit"
            onClick={() => setSelectedSkill({ ...data })}
          />
          <ControlButton control="delete" onClick={() => onDelete(data.id)} />
        </div>
      </div>
      <ProgressBar currentValue={data.level} maxValue={10} />
    </li>
  );
}

export default Skill;
