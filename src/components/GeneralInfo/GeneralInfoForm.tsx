import { ChangeEvent, FormEvent, useState } from 'react';
import { GeneralInfoType, GeneralInfoEnum } from '../../types/generalInfoType';
import TextInput from '../ui/TextInput/TextInput';
import { useCvStore } from '../../store';

type PropsType = {
  data: GeneralInfoType;
};

function GeneralInfoForm({ data }: PropsType) {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType>(data);
  const onGeneralSubmit = useCvStore((state) => state.setGeneralInfo);
  const setEditGeneralInfo = useCvStore((state) => state.setEditGeneralInfo);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGeneralInfo((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGeneralSubmit(generalInfo);
    setEditGeneralInfo(false);
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <TextInput
        value={generalInfo.firstName}
        onType={handleChange}
        name={GeneralInfoEnum.firstName}
        placeholder=""
        maxLength={10}
      />
      <TextInput
        value={generalInfo.lastName}
        onType={handleChange}
        name={GeneralInfoEnum.lastName}
      />
      <TextInput
        value={generalInfo.position}
        onType={handleChange}
        name={GeneralInfoEnum.position}
      />
      <TextInput
        value={generalInfo.bio}
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
