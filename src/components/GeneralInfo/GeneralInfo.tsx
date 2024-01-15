import { useCvStore } from '../../store';
import GeneralInfoDetails from './GeneralInfoDetails';
import GeneralInfoForm from './GeneralInfoForm';

function GeneralInfo() {
  const currentEdit = useCvStore((state) => state.currentEdit);

  return (
    <section className="w-full">
      {currentEdit === 'general' ? (
        <GeneralInfoForm />
      ) : (
        <GeneralInfoDetails />
      )}
    </section>
  );
}

export default GeneralInfo;
