// hooks
import { useState } from 'react';
import { useCvStore } from '../../store';

import { SkillType } from '../../types/skillType';
import Skill from './Skill';
import SkillEdit from './SkillEdit';
import SectionHeading from '../ui/SectionHeading/SectionHeading';

function Skills() {
  const skills = useCvStore((state) => state.skills);
  const setSkills = useCvStore((state) => state.setSkills);

  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  const handleDeleteSkill = (skillId: string) => {
    const filteredSkills = skills.filter((skill) => skill.id !== skillId);
    setSkills(filteredSkills);
  };

  const handleSelectSkill = (skill: SkillType) => {
    setSelectedSkill({ ...skill });
  };

  return (
    <div className="flex flex-col gap-3">
      <SectionHeading>Skills</SectionHeading>
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
