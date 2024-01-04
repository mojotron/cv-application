import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import Timeline from '../ui/Timeline/Timeline';
import { useCvStore } from '../../store';
import TimelineItem from '../ui/Timeline/TimelineItem';
import EditButton from '../ui/EditButton/EditButton';
import { useHover } from '../../hooks/useHover';
import { TimelineItemType } from '../../types/timelineItemType';

function Education() {
  const education = useCvStore((state) => state.education);
  const currentEdit = useCvStore((state) => state.currentEdit);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  // edit state
  const [selectedItem, setSelectedItem] = useState<TimelineItemType | null>(
    null,
  );
  //

  const { hoverRef, isHovering } = useHover();

  return (
    <section ref={hoverRef} className="relative">
      {currentEdit === null && isHovering && (
        <EditButton onClick={() => setCurrentEdit('education')} />
      )}

      <SectionHeading>Education</SectionHeading>

      {currentEdit === 'education' && <p>Education EDIT</p>}

      <Timeline>
        {education.map((item) => (
          <TimelineItem
            key={item.id}
            data={item}
            editOn={currentEdit === 'education'}
            onSelect={(s) => setSelectedItem(s)}
          />
        ))}
      </Timeline>
    </section>
  );
}

export default Education;
