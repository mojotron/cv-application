import { useCvStore } from '../../store';
import ContactDetails from './ContactDetails';
import ContactEdit from './ContactEdit';

function Contact() {
  const currentEdit = useCvStore((state) => state.currentEdit);

  return (
    <section>
      {currentEdit === 'contacts' ? <ContactEdit /> : <ContactDetails />}
    </section>
  );
}

export default Contact;
