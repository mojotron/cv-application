import { useCvStore } from '../../store';
import Timeline from '../../features/Timeline/Timeline';

function ExperienceAndEducation() {
  const education = useCvStore((state) => state.education);
  const setEducation = useCvStore((state) => state.setEducation);
  const experience = useCvStore((state) => state.experience);
  const setExperience = useCvStore((state) => state.setExperience);

  return (
    <div>
      <section>
        <Timeline
          editTarget="experience"
          items={experience}
          updateItems={setExperience}
        />
        <Timeline
          editTarget="education"
          items={education}
          updateItems={setEducation}
        />
      </section>
    </div>
  );
}

export default ExperienceAndEducation;
