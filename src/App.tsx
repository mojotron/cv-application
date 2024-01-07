import Contact from './components/Contact/Contact';
import ContactEdit from './components/Contact/ContactEdit';
import Timeline from './components/Timeline/Timeline';
import GeneralInfoDetails from './components/GeneralInfo/GeneralInfoDetails';
import GeneralInfoForm from './components/GeneralInfo/GeneralInfoForm';
import Avatar from './components/ui/Avatar/Avatar';

import UploadImage from './components/ui/UploadImage/UploadImage';

import { useCvStore } from './store';

function App() {
  const currentEdit = useCvStore((state) => state.currentEdit);
  const education = useCvStore((state) => state.education);
  return (
    <div className="flex flex-col gap-10  max-w-[800px] mx-auto py-20 px-10">
      {/* <section className="flex gap-8 items-start">
        {currentEdit === 'general' ? (
          <GeneralInfoForm />
        ) : (
          <GeneralInfoDetails />
        )}
        {currentEdit === 'image' ? <UploadImage /> : <Avatar />}
      </section>
      <section className="max-w-[300px]">
        {currentEdit === 'contacts' ? <ContactEdit /> : <Contact />}
      </section> */}
      <Timeline editTarget="education" items={education} />
    </div>
  );
}

export default App;
