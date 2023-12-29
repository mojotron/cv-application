import GeneralInfoDetails from './components/GeneralInfo/GeneralInfoDetails';
import GeneralInfoForm from './components/GeneralInfo/GeneralInfoForm';
import Avatar from './components/ui/Avatar/Avatar';
import UploadImage from './components/ui/UploadImage/UploadImage';
import { useCvStore } from './store';

function App() {
  const currentEdit = useCvStore((state) => state.currentEdit);
  return (
    <div className="flex flex-col  max-w-[800px] mx-auto py-20 px-10">
      <section className="flex gap-8 items-start">
        {currentEdit === 'general' ? (
          <GeneralInfoForm />
        ) : (
          <GeneralInfoDetails />
        )}
        {currentEdit === 'image' ? <UploadImage /> : <Avatar />}
      </section>
    </div>
  );
}

export default App;
