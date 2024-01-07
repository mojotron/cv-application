// hooks
import { useState } from 'react';
import { useCvStore } from '../../store';
// components
import TimelineItem from './TimelineItem';
import TimelineEdit from './TimelineEdit';
import TimelineList from './TimelineList';
// ui components
import EditButton from '../ui/EditButton/EditButton';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
// types
import type { TimelineItemType } from '../../types/timelineItemType';
import type { EditTarget } from '../../types/editTargetType';

type PropsType = {
  editTarget: EditTarget;
  items: TimelineItemType[];
};

function Timeline({ editTarget, items }: PropsType) {
  const currentEdit = useCvStore((state) => state.currentEdit);

  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
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
    <section className="relative group">
      <EditButton
        onClick={() => {
          setCurrentEdit(editTarget === currentEdit ? null : editTarget);
        }}
      />

      <SectionHeading>{editTarget}</SectionHeading>

      {currentEdit === editTarget && (
        <TimelineEdit
          key={selectedItem.id}
          selectedItem={selectedItem}
          isNewItem={isNewItem}
        />
      )}

      <TimelineList>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            data={item}
            editOn={currentEdit === editTarget}
            onSelect={handleSelectItem}
          />
        ))}
      </TimelineList>
    </section>
  );
}

export default Timeline;
