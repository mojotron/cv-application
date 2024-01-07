import { useState, ChangeEvent, FormEvent } from 'react';
import { TimelineItemType } from '../../types/timelineItemType';
import DateInput from '../ui/DateInput/DateInput';
import TextInput from '../ui/TextInput/TextInput';
import Button from '../ui/Button/Button';

type PropsType = {
  selectedItem: TimelineItemType;
  isNewItem: boolean;
  onUpdate: (item: TimelineItemType) => void;
};

function TimelineEdit({ selectedItem, isNewItem, onUpdate }: PropsType) {
  const [item, setItem] = useState(() => ({ ...selectedItem }));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setItem((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(item);
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextInput
          name="title"
          placeholder="title"
          value={item.title}
          onType={handleChange}
        />
        <TextInput
          name="institution"
          placeholder="institution"
          value={item.institution}
          onType={handleChange}
        />
        <TextInput
          name="description"
          placeholder="short description"
          type="textarea"
          value={item.description}
          onType={handleChange}
        />
        <div className="flex gap-10">
          <DateInput
            label="start"
            value={item.dateStart}
            onChange={handleChange}
            name="dateStart"
          />
          <DateInput
            label="end"
            value={item.dateEnd}
            onChange={handleChange}
            name="dateEnd"
          />
        </div>
        {isNewItem ? (
          <Button submit={true} onClick={() => {}}>
            Add
          </Button>
        ) : (
          <Button submit={true} onClick={() => {}}>
            Update
          </Button>
        )}
      </form>

      {!isNewItem && (
        <Button submit={false} onClick={() => {}}>
          Delete
        </Button>
      )}
    </div>
  );
}

export default TimelineEdit;
