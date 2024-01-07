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

const createBlankTimelineItem = () => {
  return {
    id: crypto.randomUUID(),
    title: '',
    institution: '',
    dateStart: '',
    dateEnd: '',
    description: '',
  };
};

type PropsType = {
  editTarget: EditTarget;
  items: TimelineItemType[];
  updateItems: (newItems: TimelineItemType[]) => void;
};

function Timeline({ editTarget, items, updateItems }: PropsType) {
  const currentEdit = useCvStore((state) => state.currentEdit);

  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  // edit state
  const [isNewItem, setIsNewItem] = useState(true);
  const [selectedItem, setSelectedItem] = useState<TimelineItemType>(() =>
    createBlankTimelineItem(),
  );
  //

  const handleSelectItem = (itemId: string) => {
    const newSelectedItem = items.find((item) => item.id === itemId);
    setSelectedItem({ ...(newSelectedItem as TimelineItemType) });
    setIsNewItem(false);
  };

  const handleDeleteItem = (itemId: string) => {
    const filteredItem = items.filter((item) => item.id !== itemId);
    updateItems(filteredItem);
  };

  const handleUpdate = (item: TimelineItemType) => {
    if (isNewItem) {
      updateItems([item, ...items]);
    } else {
      const modifiedItems = items.map((oldItem) =>
        oldItem.id === item.id ? item : oldItem,
      );
      updateItems(modifiedItems);
    }
    setIsNewItem(true);
    setSelectedItem(createBlankTimelineItem());
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
          onUpdate={handleUpdate}
        />
      )}

      <TimelineList>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            data={item}
            editOn={currentEdit === editTarget}
            onSelect={handleSelectItem}
            onDelete={handleDeleteItem}
          />
        ))}
      </TimelineList>
    </section>
  );
}

export default Timeline;
