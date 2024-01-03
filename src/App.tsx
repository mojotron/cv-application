import Contact from './components/Contact/Contact';
import ContactEdit from './components/Contact/ContactEdit';
import GeneralInfoDetails from './components/GeneralInfo/GeneralInfoDetails';
import GeneralInfoForm from './components/GeneralInfo/GeneralInfoForm';
import Avatar from './components/ui/Avatar/Avatar';
import Timeline from './components/ui/Timeline/Timeline';
import TimelineItem from './components/ui/Timeline/TimelineItem';
import UploadImage from './components/ui/UploadImage/UploadImage';
import { useCvStore } from './store';

function App() {
  const currentEdit = useCvStore((state) => state.currentEdit);
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
      <Timeline>
        <TimelineItem
          data={{
            title: 'position',
            institution: 'university',
            dateStart: new Date(),
            dateEnd: new Date(),
            description: 'this is temp text',
          }}
        />

        <TimelineItem
          data={{
            title: 'position',
            institution: 'university',
            dateStart: new Date(),
            dateEnd: new Date(),
            description: 'this is temp text',
          }}
        />

        <TimelineItem
          data={{
            title: 'position',
            institution: 'university',
            dateStart: new Date(),
            dateEnd: new Date(),
            description: 'this is temp text',
          }}
        />
      </Timeline>
    </div>
  );
}

export default App;
