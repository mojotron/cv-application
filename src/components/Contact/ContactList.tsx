import { IoTrashBin } from 'react-icons/io5';
import { DragEvent, useState, useRef } from 'react';
import { useCvStore } from '../../store';
import ContactRow from './ContactRow';

function ContactList() {
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
  const handleDragEnterDelete = () => {
    setDraggedOverDelete(true);
  };
  const handleDragLeaveDelete = () => {
    setDraggedOverDelete(false);
  };
  const handleOnDropDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedItem === null) return;
    const id = contact[draggedItem].name;
    const newContacts = contact.filter((c) => c.name !== id);
    setContact(newContacts);
    setDraggedOverDelete(false);
    setDraggedItem(null);
    draggedOverItem.current = null;
  };

  return (
    <div className="border border-3 border-slate-800">
      <ul className=" p-4 flex flex-col gap-3">
        {contact.map((option, index) => (
          <li
            // DRAG handlers
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            // - - - - - - - - - - - -
            className="border border-1 border-slate-600 cursor-move"
            key={option.name}
            id={option.name}>
            <ContactRow data={option} />
          </li>
        ))}
      </ul>
      <div
        // DRAG handlers
        onDragEnter={handleDragEnterDelete}
        onDragLeave={handleDragLeaveDelete}
        onDragOver={handleDragOver}
        onDrop={handleOnDropDelete}
        // - - - - - - - - - - - -
        className={`text-red-300 ml-auto border bg-blue-200 ${
          draggedOverDelete ? 'bg-red-400' : 'bg-transparent'
        }`}>
        <IoTrashBin size={40} />
      </div>
    </div>
  );
}

export default ContactList;
