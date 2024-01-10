import { SkillType } from '../../types/skillType';
import Button from '../ui/Button/Button';

type PropsType = {
  data: SkillType;
  onDelete: (skillId: string) => void;
  onSelect: (skill: SkillType) => void;
};

function Skill({ data, onDelete, onSelect }: PropsType) {
  return (
    <div className="group">
      <h3>{data.name}</h3>
      <div className="flex">
        <progress max={10} value={data.level} />
        <div className="invisible group-hover:visible">
          <Button onClick={() => onSelect(data)}>+</Button>
          <Button onClick={() => onDelete(data.id)}>x</Button>
        </div>
      </div>
    </div>
  );
}

export default Skill;
