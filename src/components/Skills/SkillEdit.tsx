// hooks
import { ChangeEvent } from 'react';
import { useCvStore } from '../../store';
// ui components
import TextInput from '../ui/TextInput/TextInput';
import RangeInput from '../ui/RangeInput/RangeInput';
import ControlButton from '../ui/ControlButton/ControlButton';
// constants
import {
  MIN_SKILL,
  MAX_SKILL,
  STEP_SKILL,
} from '../../constants/skillDefaults';
import { TEXT_LENGTHS } from '../../constants/inputTextLengths';

type PropsType = {
  onSkillUpdate: () => void;
};

function SkillEdit({ onSkillUpdate }: PropsType) {
  const selectedSkill = useCvStore((state) => state.selectedSkill);
  const setSelectedSkill = useCvStore((state) => state.setSelectedSkill);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

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

  const handleCancel = () => {
    setSelectedSkill(null);
    setCurrentEdit(null);
  };

  if (selectedSkill === null) return null;

  return (
    <li className="flex items-start">
      <div>
        <TextInput
          value={selectedSkill.name}
          onType={handleChangeName}
          name="level"
          maxLength={TEXT_LENGTHS.skill}
        />
        <RangeInput
          key={selectedSkill.id}
          value={selectedSkill.level}
          onChange={handleChangeLevel}
          options={{ min: MIN_SKILL, max: MAX_SKILL, step: STEP_SKILL }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ControlButton control="cancel" size={35} onClick={handleCancel} />
        <ControlButton control="update" size={35} onClick={onSkillUpdate} />
      </div>
    </li>
  );
}

export default SkillEdit;
