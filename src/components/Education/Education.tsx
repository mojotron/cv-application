import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import Timeline from '../ui/Timeline/Timeline';
import { useCvStore } from '../../store';
import TimelineItem from '../ui/Timeline/TimelineItem';
import EditButton from '../ui/EditButton/EditButton';

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
    dateStart: new Date().toDateString(),
    dateEnd: new Date().toDateString(),
    description: '',
  }));
  //

  const handleSelectItem = (item: TimelineItemType) => {
    setSelectedItem({ ...item });
    setIsNewItem(false);
  };

  return (
    <section className="relative">
      <EditButton
        onClick={() => {
          setCurrentEdit('education');
        }}
      />

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
