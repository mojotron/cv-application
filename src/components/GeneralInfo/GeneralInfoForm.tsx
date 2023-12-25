import React, { ChangeEvent, useState } from 'react';
import { GeneralInfoType, GeneralInfoEnum } from '../../types/generalInfoType';
import TextInput from '../ui/TextInput/TextInput';

type PropsType = {
  data: GeneralInfoType;
};

function GeneralInfoForm({ data }: PropsType) {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType>(data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setGeneralInfo(oldValue => ({ ...oldValue, [name]: value }));
  };

  // const handleSubmit = () => {};

  return (
    <form className="flex flex-col">
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
      />
    </form>
  );
}

export default GeneralInfoForm;
