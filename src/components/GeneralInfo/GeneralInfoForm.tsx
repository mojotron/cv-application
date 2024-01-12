import { ChangeEvent, FormEvent } from 'react';
import {
  GeneralInfoType,
  GeneralInfoEnum,
  GeneralInfoLengths,
} from '../../types/generalInfoType';
import TextInput from '../ui/TextInput/TextInput';
import { useCvStore } from '../../store';
import ControlButton from '../ui/ControlButton/ControlButton';

function GeneralInfoForm() {
  const generalInfo = useCvStore((state) => state.generalInfo);
  const setGeneralInfo = useCvStore((state) => state.setGeneralInfo);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const modifiedGeneralInfo: GeneralInfoType = {
      ...generalInfo,
      [name]: value,
    };
    setGeneralInfo(modifiedGeneralInfo);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentEdit(null);
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <TextInput
        value={generalInfo.firstName}
        onType={handleChange}
        name={GeneralInfoEnum.firstName}
        placeholder=""
        maxLength={GeneralInfoLengths.name}
      />
      <TextInput
        value={generalInfo.lastName}
        onType={handleChange}
        name={GeneralInfoEnum.lastName}
        maxLength={GeneralInfoLengths.name}
      />
      <TextInput
        value={generalInfo.position}
        onType={handleChange}
        name={GeneralInfoEnum.position}
        maxLength={GeneralInfoLengths.position}
      />
      <TextInput
        value={generalInfo.bio}
        onType={handleChange}
        name={GeneralInfoEnum.bio}
        type="textarea"
        maxLength={GeneralInfoLengths.bio}
      />

      <div className="ml-auto">
        <ControlButton
          control="update"
          options={{ btnType: 'submit' }}
          size={30}
        />
      </div>
    </form>
  );
}

export default GeneralInfoForm;
