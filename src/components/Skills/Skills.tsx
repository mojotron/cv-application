// hooks
import { useState } from 'react';
import { useCvStore } from '../../store';

import RangeInput from '../ui/RangeInput/RangeInput';
import { SkillType } from '../../types/skillType';
import Skill from './Skill';
import SkillEdit from './SkillEdit';

function Skills() {
  const skills = useCvStore((state) => state.skills);
  const setSkills = useCvStore((state) => state.setSkills);

  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  const handleDeleteSkill = (skillId: string) => {};

  const handleSelectSkill = (skill: SkillType) => {
    setSelectedSkill({ ...skill });
  };

  return (
    <div>
      {skills.map((skill) => {
        return selectedSkill !== null && skill.id === selectedSkill.id ? (
          <SkillEdit skill={selectedSkill} />
        ) : (
          <Skill
            key={skill.id}
            data={skill}
            onDelete={handleDeleteSkill}
            onSelect={handleSelectSkill}
          />
        );
      })}
    </div>
  );
}

export default Skills;
