import React, { useState } from 'react';
import { TimelineItemType } from '../../../types/timelineItemType';
import TextInput from '../TextInput/TextInput';
import Timeline from './Timeline';

function TimelineEdit() {
  const [createNew, setCreateNew] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TimelineItemType | null>(
    null,
  );

  const handleCreateNewItem = () => {
    setCreateNew(true);
    setSelectedItem({
      id: crypto.randomUUID(),
      title: '',
      institution: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      description: '',
    });
  };

  const handleAddItem = () => {};

  const handleDeleteItem = () => {};

  const handleUpdateItem = () => {};

  return (
    <section>
      <button type="button" onClick={handleCreateNewItem}>
        Create new
      </button>

      {selectedItem !== null && <form>{/* <TextInput /> */}</form>}
    </section>
  );
}

export default TimelineEdit;
