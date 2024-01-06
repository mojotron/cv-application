import { TimelineItemType } from '../../../types/timelineItemType';
import DateInput from '../DateInput/DateInput';
import TextInput from '../TextInput/TextInput';
import { ChangeEvent, useState } from 'react';

type PropsType = {
  selectedItem: TimelineItemType;
  isNewItem: boolean;
};

function TimelineEdit({ selectedItem, isNewItem }: PropsType) {
  const [item, setItem] = useState(() => ({ ...selectedItem }));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setItem((oldValue) => ({ ...oldValue, [name]: value }));
  };

  console.log(item.id);

  return (
    <div>
      <form className="flex flex-col gap-3">
        <TextInput
          placeholder="title"
          value={item.title}
          onType={handleChange}
        />
        <TextInput
          placeholder="institution"
          value={item.institution}
          onType={handleChange}
        />
        <TextInput
          placeholder="short description"
          type="textarea"
          value={item.description}
          onType={handleChange}
        />
        <DateInput
          label="start"
          value={item.dateStart}
          onChange={handleChange}
          name="dateStart"
        />
      </form>

      {!isNewItem && <button type="button">Delete</button>}
    </div>
  );
}

export default TimelineEdit;
