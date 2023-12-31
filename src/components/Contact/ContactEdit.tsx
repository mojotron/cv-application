import { useCvStore } from '../../store';
import CreateNewContactOption from './CreateNewContactOption';

function ContactEdit() {
  const contact = useCvStore((state) => state.contact);
  const setContact = useCvStore((state) => state.setContact);

  return (
    <div>
      <h2>Contacts</h2>
      <CreateNewContactOption />
    </div>
  );
}

export default ContactEdit;
