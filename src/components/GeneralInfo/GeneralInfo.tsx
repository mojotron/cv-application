import { useCvStore } from '../../store';
import GeneralInfoDetails from './GeneralInfoDetails';
import GeneralInfoForm from './GeneralInfoForm';

function GeneralInfo() {
  const currentEdit = useCvStore((state) => state.currentEdit);

  return (
    // print-margin-top is custom class for printing, look index.css
    <section className="w-full print-margin-top">
      {currentEdit === 'general' ? (
        <GeneralInfoForm />
      ) : (
        <GeneralInfoDetails />
      )}
    </section>
  );
}

export default GeneralInfo;
