import { useCvStore } from '../../store';
// Components
import ContactRow from './ContactRow';
// ui Components
import ControlButton from '../ui/ControlButton/ControlButton';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import HoverVisibility from '../ui/HoverVisibility/HoverVisibility';

function Contact() {
  const contact = useCvStore((state) => state.contact);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  return (
    <section className="flex flex-col gap-3 relative group">
      <HoverVisibility topRight={true}>
        <ControlButton
          control="edit"
          onClick={() => setCurrentEdit('contacts')}
        />
      </HoverVisibility>

      <SectionHeading>Contact</SectionHeading>

      {contact.map((ele) => (
        <ContactRow key={ele.name} data={ele} />
      ))}
    </section>
  );
}

export default Contact;
