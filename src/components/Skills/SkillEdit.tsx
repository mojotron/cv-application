import React, { ChangeEvent, useState } from 'react';
import TextInput from '../ui/TextInput/TextInput';
import RangeInput from '../ui/RangeInput/RangeInput';
import { SkillType } from '../../types/skillType';
import Button from '../ui/Button/Button';

// constants
import {
  MIN_SKILL,
  MAX_SKILL,
  STEP_SKILL,
} from '../../constants/skillDefaults';

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

  return (
    <form onSubmit={() => {}}>
      <TextInput value={editSkill.name} onType={handleChangeName} />
      <RangeInput
        key={editSkill.id}
        value={editSkill.level}
        onChange={() => {}}
        options={{ min: MIN_SKILL, max: MAX_SKILL, step: STEP_SKILL }}
      />
      <Button onClick={() => {}} submit={true}>
        Update
      </Button>
    </form>
  );
}

export default SkillEdit;
