import { DragEvent, useState, useRef } from 'react';
import { useCvStore } from '../../store';
import ContactRow from './ContactRow';

function ContactListEdit() {
  const contact = useCvStore((state) => state.contact);
  const setContact = useCvStore((state) => state.setContact);
  // store index of dragged element
  const [draggedItem, setDraggedItem] = useState<null | number>(null);
  // store index of element draggedItem is over
  const draggedOverItem = useRef<null | number>(null);
  const [draggedOverDelete, setDraggedOverDelete] = useState(false);
  // handlers reorder items
  const handleDragStart = (e: DragEvent<HTMLLIElement>, index: number) => {
    setDraggedItem(index);
  };

  const handleDragEnter = (e: DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    if (draggedItem === null) return;
    draggedOverItem.current = index;

    const copyItems = [...contact];
    const copyDraggedItem = { ...copyItems[draggedItem] };
    copyItems.splice(draggedItem, 1);
    copyItems.splice(draggedOverItem.current, 0, copyDraggedItem);
    setDraggedItem(draggedOverItem.current);
    draggedOverItem.current = null;
    setContact(copyItems);
  };

  const handleDragEnd = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    setDraggedItem(null);
    draggedOverItem.current = null;
  };

  const handleDragOver = (e: DragEvent<HTMLLIElement | HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };
  // handlers delete items
  const handleDragEnterDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOverDelete(true);
  };
  const handleDragLeaveDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOverDelete(false);
  };
  const handleOnDropDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedItem === null) return;
    if (draggedOverDelete === false) return;
    const id = contact[draggedItem].name;
    const newContacts = contact.filter((c) => c.name !== id);
    setContact(newContacts);
    setDraggedOverDelete(false);
    setDraggedItem(null);
    draggedOverItem.current = null;
  };

  return (
    <div className="w-full border border-3 border-neutral-400 rounded-md overflow-hidden flex flex-col gap-1">
      <ul className="flex flex-col gap-1">
        {contact.map((option, index) => (
          <li
            // DRAG handlers
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            // - - - - - - - - - - - -
            className="py-2 px-2 cursor-move bg-neutral-200"
            key={option.name}
            id={option.name}>
            <ContactRow data={option} />
          </li>
        ))}
      </ul>
      <div
        // DRAG handlers
        onDragOver={handleDragEnterDelete}
        onDragLeave={handleDragLeaveDelete}
        onDrop={handleOnDropDelete}
        // - - - - - - - - - - - -
        className={`text-sm flex items-center justify-center relative h-10 w-full ${
          draggedOverDelete
            ? 'bg-red-400 text-red-200'
            : 'bg-transparent text-red-400'
        }`}>
        Delete Drop Zone
      </div>
    </div>
  );
}

export default ContactListEdit;
