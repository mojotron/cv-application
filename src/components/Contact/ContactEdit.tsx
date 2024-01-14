// import { useCvStore } from '../../store';
import { useCvStore } from '../../store';
import ControlButton from '../ui/ControlButton/ControlButton';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import ContactListEdit from './ContactListEdit';
import CreateNewContactOption from './CreateNewContactOption';

function ContactEdit() {
  // const contact = useCvStore((state) => state.contact);
  // const setContact = useCvStore((state) => state.setContact);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  return (
    <div className="flex flex-col gap-2">
      <SectionHeading>Edit Contacts</SectionHeading>
      <CreateNewContactOption />
      <ContactListEdit />

      <div className="ml-auto">
        <ControlButton
          control="update"
          onClick={() => setCurrentEdit(null)}
          size={30}
        />
      </div>
    </div>
  );
}

export default ContactEdit;
