import Contact from './components/Contact/Contact';
import ContactEdit from './components/Contact/ContactEdit';
import Timeline from './features/Timeline/Timeline';
import GeneralInfoDetails from './components/GeneralInfo/GeneralInfoDetails';
import GeneralInfoForm from './components/GeneralInfo/GeneralInfoForm';
import Avatar from './components/ui/Avatar/Avatar';

import Skills from './components/Skills/Skills';

import UploadImage from './components/ui/UploadImage/UploadImage';

import { useCvStore } from './store';
import ExperienceAndEducation from './components/ExperiencAndEducation/ExperienceAndEducation';

function App() {
  const currentEdit = useCvStore((state) => state.currentEdit);

  return (
    <div className="flex flex-col gap-10  max-w-[800px] mx-auto py-20 px-10">
      <section className="flex gap-8 items-start">
        {currentEdit === 'general' ? (
          <GeneralInfoForm />
        ) : (
          <GeneralInfoDetails />
        )}
        {currentEdit === 'image' ? <UploadImage /> : <Avatar />}
      </section>
      <div className="w-full flex gap-5 justify-between">
        <section className="max-w-[400px]">
          {currentEdit === 'contacts' ? <ContactEdit /> : <Contact />}
          <Skills />
        </section>
        <ExperienceAndEducation />
      </div>
    </div>
  );
}

export default App;
