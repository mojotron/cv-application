// hooks
import { useCvStore } from '../../store';

import { SkillType } from '../../types/skillType';
import Skill from './Skill';
import SkillEdit from './SkillEdit';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import ControlButton from '../ui/ControlButton/ControlButton';
import HoverVisibility from '../ui/HoverVisibility/HoverVisibility';

function Skills() {
  const skills = useCvStore((state) => state.skills);
  const setSkills = useCvStore((state) => state.setSkills);
  const selectedSkill = useCvStore((state) => state.selectedSkill);
  const setSelectedSkill = useCvStore((state) => state.setSelectedSkill);
  const currentEdit = useCvStore((state) => state.currentEdit);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  const handleDeleteSkill = (skillId: string) => {
    const filteredSkills = skills.filter((skill) => skill.id !== skillId);
    setSkills(filteredSkills);
  };

  const handleUpdateSkill = () => {
    if (selectedSkill === null) return;
    const modifiedSkills = skills.map((skill) =>
      skill.id === selectedSkill.id ? selectedSkill : skill,
    );
    setSkills(modifiedSkills);
    setSelectedSkill(null);
    setCurrentEdit(null);
  };

  const handleAddNewSkill = () => {
    const newSkill: SkillType = {
      id: crypto.randomUUID(),
      name: '',
      level: 0,
    };
    setSkills([...skills, newSkill]);
    setSelectedSkill({ ...newSkill });
    setCurrentEdit('skills');
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="group flex gap-3 items-center cursor-pointer relative">
        {currentEdit === null && (
          <HoverVisibility topRight={true}>
            <ControlButton
              control="new"
              onClick={handleAddNewSkill}
              size={25}
            />
          </HoverVisibility>
        )}

        <SectionHeading>Skills</SectionHeading>
      </div>

      <ul className="flex flex-col gap-3">
        {skills.map((skill) => {
          return selectedSkill !== null &&
            skill.id === selectedSkill.id &&
            currentEdit === 'skills' ? (
            <SkillEdit key={skill.id} onSkillUpdate={handleUpdateSkill} />
          ) : (
            <Skill key={skill.id} data={skill} onDelete={handleDeleteSkill} />
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
