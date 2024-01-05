import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import Timeline from '../ui/Timeline/Timeline';
import { useCvStore } from '../../store';
import TimelineItem from '../ui/Timeline/TimelineItem';
import EditButton from '../ui/EditButton/EditButton';
import { useHover } from '../../hooks/useHover';
import { TimelineItemType } from '../../types/timelineItemType';
import TimelineEdit from '../ui/Timeline/TimelineEdit';

function Education() {
  const education = useCvStore((state) => state.education);
  const currentEdit = useCvStore((state) => state.currentEdit);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  console.log('RENDER');

  // edit state
  const [isNewItem, setIsNewItem] = useState(true);
  const [selectedItem, setSelectedItem] = useState<TimelineItemType>(() => ({
    id: crypto.randomUUID(),
    title: '',
    institution: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    description: '',
  }));
  //

  const { hoverRef, isHovering } = useHover();

  const handleSelectItem = (item: TimelineItemType) => {
    setSelectedItem({ ...item });
    setIsNewItem(false);
  };

  return (
    <section ref={hoverRef} className="relative">
      {currentEdit === null && isHovering && (
        <EditButton
          onClick={() => {
            setCurrentEdit('education');
          }}
        />
      )}

      <SectionHeading>Education</SectionHeading>

      {currentEdit === 'education' && (
        <TimelineEdit
          key={selectedItem.id}
          selectedItem={selectedItem}
          isNewItem={isNewItem}
        />
      )}

      <Timeline>
        {education.map((item) => (
          <TimelineItem
            key={item.id}
            data={item}
            editOn={currentEdit === 'education'}
            onSelect={handleSelectItem}
          />
        ))}
      </Timeline>
    </section>
  );
}

export default Education;
