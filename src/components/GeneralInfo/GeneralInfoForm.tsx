import { ChangeEvent, FormEvent, useState } from 'react';
import { GeneralInfoType, GeneralInfoEnum } from '../../types/generalInfoType';
import TextInput from '../ui/TextInput/TextInput';
import { useCvStore } from '../../store';

function GeneralInfoForm() {
  const data = useCvStore((state) => state.generalInfo);
  const setGeneralInfo = useCvStore((state) => state.setGeneralInfo);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  const [generalData, setGeneralData] = useState<GeneralInfoType>(data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGeneralData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralInfo(generalData);
    setCurrentEdit(null);
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <TextInput
        value={generalData.firstName}
        onType={handleChange}
        name={GeneralInfoEnum.firstName}
        placeholder=""
        maxLength={10}
      />
      <TextInput
        value={generalData.lastName}
        onType={handleChange}
        name={GeneralInfoEnum.lastName}
      />
      <TextInput
        value={generalData.position}
        onType={handleChange}
        name={GeneralInfoEnum.position}
      />
      <TextInput
        value={generalData.bio}
        onType={handleChange}
        name={GeneralInfoEnum.bio}
        type="textarea"
        maxLength={10}
      />

      <button type="submit" className="">
        Update
      </button>
    </form>
  );
}

export default GeneralInfoForm;
