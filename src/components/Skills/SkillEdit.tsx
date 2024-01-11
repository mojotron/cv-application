import { ChangeEvent, useState } from 'react';
import TextInput from '../ui/TextInput/TextInput';
import RangeInput from '../ui/RangeInput/RangeInput';
import { SkillType } from '../../types/skillType';

// constants
import {
  MIN_SKILL,
  MAX_SKILL,
  STEP_SKILL,
} from '../../constants/skillDefaults';
import ControlButton from '../ui/ControlButton/ControlButton';

type PropsType = {
  skill: SkillType;
};

function SkillEdit({ skill }: PropsType) {
  const [editSkill, setEditSkill] = useState(() => skill);

  const handleChangeName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditSkill((oldValue) => ({ ...oldValue, name: e.target.value }));
  };

  const handleChangeLevel = (e: ChangeEvent<HTMLInputElement>) => {
    setEditSkill((oldValue) => ({
      ...oldValue,
      level: Number(e.target.value),
    }));
  };

  return (
    <div>
      <TextInput value={editSkill.name} onType={handleChangeName} />
      <RangeInput
        key={editSkill.id}
        value={editSkill.level}
        onChange={handleChangeLevel}
        options={{ min: MIN_SKILL, max: MAX_SKILL, step: STEP_SKILL }}
      />
      <ControlButton control="update" onClick={() => {}} />
    </div>
  );
}

export default SkillEdit;
