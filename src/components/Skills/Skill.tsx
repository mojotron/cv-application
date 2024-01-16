import { useCvStore } from '../../store';
import { SkillType } from '../../types/skillType';
import ControlButton from '../ui/ControlButton/ControlButton';
import ProgressBar from '../ui/ProgressBar/ProgressBar';

type PropsType = {
  data: SkillType;
  onDelete: (skillId: string) => void;
};

function Skill({ data, onDelete }: PropsType) {
  const currentEdit = useCvStore((state) => state.currentEdit);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  const setSelectedSkill = useCvStore((state) => state.setSelectedSkill);

  return (
    // page-brake is custom class for printing, look index.css
    <li className="page-break group">
      <div className="flex justify-between items-center">
        <h3 className="text-md text-slate-500 font-bold">{data.name}</h3>
        {currentEdit === null && (
          <div className="invisible group-hover:visible flex gap-2">
            <ControlButton
              control="edit"
              onClick={() => {
                setSelectedSkill({ ...data });
                setCurrentEdit('skills');
              }}
            />
            <ControlButton
              control="delete"
              onClick={() => onDelete(data.id)}
            />
          </div>
        )}
      </div>
      <ProgressBar currentValue={data.level} maxValue={10} />
    </li>
  );
}

export default Skill;
