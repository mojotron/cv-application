// hooks
import { useCvStore } from '../../store';
// ui components
import ControlButton from '../ui/ControlButton/ControlButton';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
// components
import ContactListEdit from './ContactListEdit';
import CreateNewContactOption from './CreateNewContactOption';

function ContactEdit() {
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
