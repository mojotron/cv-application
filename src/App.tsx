// hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
// components
import Contact from './components/Contact/Contact';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Skills from './components/Skills/Skills';
import ExperienceAndEducation from './components/ExperienceAndEducation/ExperienceAndEducation';
import ProfileImage from './components/ProfileImage/ProfileImage';
import PrintButton from './components/ui/PrintButton/PrintButton';

function App() {
  const printRef = useRef<HTMLSelectElement>(null);

  const handlePrintCv = useReactToPrint({ content: () => printRef.current });

  return (
    <div>
      <PrintButton onPrint={handlePrintCv} />

      <section
        ref={printRef}
        className="flex flex-col gap-10 max-w-[800px] mx-auto py-20 px-20">
        <header className="flex gap-10">
          <GeneralInfo />
          <ProfileImage />
        </header>
        <main className="flex gap-10">
          <aside className="flex flex-col gap-10">
            <Contact />
            <Skills />
          </aside>
          <ExperienceAndEducation />
        </main>
      </section>
    </div>
  );
}

export default App;
