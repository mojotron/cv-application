import { useCvStore } from '../../store';
// Components
import ContactRow from './ContactRow';
// types
import { ContactOption, ContactType } from '../../types/contactType';
import { useHover } from '../../hooks/useHover';
import EditButton from '../ui/EditButton/EditButton';

function Contact() {
  const contact = useCvStore((state) => state.contact);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  const { hoverRef, isHovering } = useHover();

  return (
    <section ref={hoverRef} className="flex flex-col gap-3 relative w-[30%]">
      {isHovering && <EditButton onClick={() => setCurrentEdit('contacts')} />}

      <h2 className="text-xl font-bold text-slate-600">Contact</h2>
      {Object.keys(contact).map((ele) => (
        <ContactRow
          key={ele}
          value={contact[ele as keyof ContactType] || ''}
          type={ContactOption[ele as keyof ContactType]}
        />
      ))}
    </section>
  );
}

export default Contact;
