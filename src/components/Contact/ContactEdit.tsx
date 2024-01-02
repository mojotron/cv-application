// import { useCvStore } from '../../store';
import { useCvStore } from '../../store';
import ContactList from './ContactList';
import CreateNewContactOption from './CreateNewContactOption';

function ContactEdit() {
  // const contact = useCvStore((state) => state.contact);
  // const setContact = useCvStore((state) => state.setContact);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  return (
    <div>
      <h2 className="text-lg text-slate-700">Edit Contacts Information</h2>
      <CreateNewContactOption />
      <ContactList />

      <button type="button" onClick={() => setCurrentEdit(null)}>
        Finish editing
      </button>
    </div>
  );
}

export default ContactEdit;
