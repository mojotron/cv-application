import { TimelineItemType } from '../../../types/timelineItemType';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

type PropsType = {
  selectedItem: TimelineItemType;
  isNewItem: boolean;
};

function TimelineEdit({ selectedItem, isNewItem }: PropsType) {
  console.log(selectedItem);

  return (
    <div>
      <form>{/* <TextInput placeholder="title" /> */}</form>

      <button>Delete</button>
    </div>
  );
}

export default TimelineEdit;
