// hooks
import { useState, ChangeEvent } from 'react';
import { useCvStore } from '../../store';
// components
import TimelineItem from './TimelineItem';
import TimelineEdit from './TimelineEdit';
import TimelineList from './TimelineList';
import TextInput from '../../components/ui/TextInput/TextInput';
import DateInput from '../../components/ui/DateInput/DateInput';
// ui components
import ControlButton from '../../components/ui/ControlButton/ControlButton';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
// types
import type { TimelineItemType } from '../../types/timelineItemType';
import type { EditTarget } from '../../types/editTargetType';
import HoverVisibility from '../../components/ui/HoverVisibility/HoverVisibility';
// constants
import { TEXT_LENGTHS } from '../../constants/inputTextLengths';
import { TimelineItemEnum } from '../../types/timelineItemType';

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
    setCurrentEdit(null);
  };

  return (
    <section className="relative group flex flex-col gap-5">
      <HoverVisibility topRight={true}>
        <ControlButton
          control="edit"
          onClick={() => {
            setCurrentEdit(editTarget === currentEdit ? null : editTarget);
          }}
        />
      </HoverVisibility>

      <SectionHeading>{editTarget}</SectionHeading>

      {currentEdit === editTarget && (
        <TimelineEdit>
          <TextInput
            name={TimelineItemEnum.title}
            placeholder={TimelineItemEnum.title}
            value={selectedItem.title}
            onType={handleChange}
            maxLength={TEXT_LENGTHS.timeline.title}
          />
          <TextInput
            name={TimelineItemEnum.institution}
            placeholder={TimelineItemEnum.institution}
            value={selectedItem.institution}
            onType={handleChange}
            maxLength={TEXT_LENGTHS.timeline.institution}
          />
          <TextInput
            name={TimelineItemEnum.description}
            placeholder={TimelineItemEnum.description}
            type="textarea"
            value={selectedItem.description}
            onType={handleChange}
            maxLength={TEXT_LENGTHS.timeline.description}
          />
          <div className="flex gap-10">
            <DateInput
              label={TimelineItemEnum.dateStart}
              value={selectedItem.dateStart}
              onChange={handleChange}
              name={TimelineItemEnum.dateStart}
            />
            <DateInput
              label={TimelineItemEnum.dateEnd}
              value={selectedItem.dateEnd}
              onChange={handleChange}
              name={TimelineItemEnum.dateEnd}
            />
            <ControlButton control="update" onClick={handleUpdate} size={35} />
          </div>
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
