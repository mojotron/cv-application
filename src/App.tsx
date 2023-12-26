import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import UploadImage from './components/ui/UploadImage/UploadImage';

function App() {
  return (
    <div className="flex flex-col p-10">
      <GeneralInfo />
      <UploadImage />
    </div>
  );
}

export default App;
