import { IoTrashBin } from 'react-icons/io5';
import { DragEvent, useState } from 'react';
import { useCvStore } from '../../store';
import ContactRow from './ContactRow';
import { ContactOption } from '../../types/contactType';

function ContactList() {
  const contact = useCvStore((state) => state.contact);
  const setContact = useCvStore((state) => state.setContact);

  const [dragReorderActive, setDragReorderActive] = useState(false);
  const [dragDeleteActive, setDragDeleteActive] = useState(false);

  const [dropReorder, setDropReorder] = useState(false);
  const [dropDelete, setDropDelete] = useState(false);
  const [draggedContact, setDraggedContact] = useState<
    null | keyof typeof ContactOption
  >(null);

  const handleDragStart = (contactName: string) => {
    setDraggedContact(contactName as keyof typeof ContactOption);
  };

  // STATE handlers
  const handleDeleteContact = () => {
    const newContact = contact.filter((c) => c.name !== draggedContact);
    setContact(newContact);
    setDraggedContact(null);
  };

  // REORDER handlers
  const handleDragOverReorder = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    setDragReorderActive(true);
  };

  const handleOnDropReorder = () => {
    console.log('DROP reorder');
    setDragReorderActive(false);
  };

  const handleDragLeaveReorder = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    console.log('Drag leave');
  };

  // DELETE handlers
  const handleOnDragOverDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragDeleteActive(true);
  };

  const handleOnDragLeaveDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragDeleteActive(false);
    setDropReorder(false);
  };

  const handleOnDropDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleDeleteContact();
    setDraggedContact(null);
    setDragDeleteActive(false);
  };

  return (
    <ul
      onDragOver={handleDragOverReorder}
      onDrop={handleOnDropReorder}
      onDragLeave={handleDragLeaveReorder}
      className="border border-3 border-slate-800 p-4 flex flex-col gap-3">
      {contact.map((option) => (
        <li
          key={option.name}
          className="border border-1 border-slate-600 cursor-move"
          draggable
          onDragStart={() => handleDragStart(option.name)}
          id={option.name}>
          <ContactRow data={option} />
        </li>
      ))}

      <div
        className={`text-red-300 ml-auto ${
          dragDeleteActive ? 'bg-red-400' : 'bg-transparent'
        }`}
        onDrop={handleOnDropDelete}
        onDragOver={handleOnDragOverDelete}
        onDragLeave={handleOnDragLeaveDelete}>
        <IoTrashBin size={40} />
      </div>
    </ul>
  );
}

export default ContactList;
