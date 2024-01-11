import { ChangeEvent } from 'react';
import TextInput from '../ui/TextInput/TextInput';
import RangeInput from '../ui/RangeInput/RangeInput';
import { useCvStore } from '../../store';
// constants
import {
  MIN_SKILL,
  MAX_SKILL,
  STEP_SKILL,
} from '../../constants/skillDefaults';
import ControlButton from '../ui/ControlButton/ControlButton';

type PropsType = {
  onSkillUpdate: () => void;
};

function SkillEdit({ onSkillUpdate }: PropsType) {
  const selectedSkill = useCvStore((state) => state.selectedSkill);
  const setSelectedSkill = useCvStore((state) => state.setSelectedSkill);

  const handleChangeName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (selectedSkill === null) return;
    setSelectedSkill({ ...selectedSkill, name: e.target.value });
  };

  const handleChangeLevel = (e: ChangeEvent<HTMLInputElement>) => {
    if (selectedSkill === null) return;
    setSelectedSkill({ ...selectedSkill, level: Number(e.target.value) });
  };

  if (selectedSkill === null) return null;

  return (
    <li className="flex items-start">
      <div>
        <TextInput
          value={selectedSkill.name}
          onType={handleChangeName}
          name="level"
        />
        <RangeInput
          key={selectedSkill.id}
          value={selectedSkill.level}
          onChange={handleChangeLevel}
          options={{ min: MIN_SKILL, max: MAX_SKILL, step: STEP_SKILL }}
        />
      </div>
      <ControlButton control="update" size={35} onClick={onSkillUpdate} />
    </li>
  );
}

export default SkillEdit;
