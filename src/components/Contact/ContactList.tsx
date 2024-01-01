import { IoTrashBin } from 'react-icons/io5';
import { DragEvent, useState } from 'react';
import { useCvStore } from '../../store';
import ContactRow from './ContactRow';

function ContactList() {
  const contact = useCvStore((state) => state.contact);
  const [dragActive, setDragActive] = useState(false);

  const handleDragStart = () => {
    console.log('starting drag');
  };

  const handleDragOver = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    console.log('OVER');
  };

  const handleOnDrop = () => {
    console.log('DROP');
  };

  const handleOnDropDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('DROP delete');
  };

  const handleDragLeave = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    console.log('Drag leave');
  };

  return (
    <ul
      onDragOver={handleDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleDragLeave}
      className="border border-3 border-slate-800 p-4 flex flex-col gap-3">
      {contact.map((option) => (
        <li
          key={option.name}
          className="border border-1 border-slate-600 cursor-move"
          draggable
          onDragStart={handleDragStart}>
          <ContactRow data={option} />
        </li>
      ))}

      <div className="text-red-300 ml-auto" onDrop={handleOnDropDelete}>
        <IoTrashBin size={40} />
      </div>
    </ul>
  );
}

export default ContactList;
