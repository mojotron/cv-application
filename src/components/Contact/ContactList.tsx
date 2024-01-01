import React, { DragEvent, useState } from 'react';
import { useCvStore } from '../../store';

function ContactList() {
  const contact = useCvStore((state) => state.contact);
  const [dragActive, setDragActive] = useState(false);

  const handleDragStart = () => {};

  const handleDragOver = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    console.log('DROP');
  };

  const handleOnDrop = () => {};

  const handleDragLeave = () => {};

  return (
    <ul draggable onDrop={handleDragOver}>
      {contact.map((option) => (
        <li
          key={option.name}
          className="border border-1 border-slate-600"
          draggable>
          {option.name}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
