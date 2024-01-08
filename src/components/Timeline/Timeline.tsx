// hooks
import { useState, ChangeEvent } from 'react';
import { useCvStore } from '../../store';
// components
import TimelineItem from './TimelineItem';
import TimelineEdit from './TimelineEdit';
import TimelineList from './TimelineList';
import TextInput from '../ui/TextInput/TextInput';
import DateInput from '../ui/DateInput/DateInput';
import Button from '../ui/Button/Button';
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setSelectedItem((oldValue) => ({ ...oldValue, [name]: value }));
  };
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

  const handleUpdate = () => {
    if (isNewItem) {
      updateItems([selectedItem, ...items]);
    } else {
      const modifiedItems = items.map((oldItem) =>
        oldItem.id === selectedItem.id ? selectedItem : oldItem,
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
        <TimelineEdit>
          <TextInput
            name="title"
            placeholder="title"
            value={selectedItem.title}
            onType={handleChange}
          />
          <TextInput
            name="institution"
            placeholder="institution"
            value={selectedItem.institution}
            onType={handleChange}
          />
          <TextInput
            name="description"
            placeholder="short description"
            type="textarea"
            value={selectedItem.description}
            onType={handleChange}
          />
          <div className="flex gap-10">
            <DateInput
              label="start"
              value={selectedItem.dateStart}
              onChange={handleChange}
              name="dateStart"
            />
            <DateInput
              label="end"
              value={selectedItem.dateEnd}
              onChange={handleChange}
              name="dateEnd"
            />
          </div>

          <Button submit={true} onClick={handleUpdate}>
            {isNewItem ? 'Add' : 'Update'}
          </Button>
        </TimelineEdit>
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
