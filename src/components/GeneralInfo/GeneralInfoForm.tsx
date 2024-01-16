import { ChangeEvent, FormEvent } from 'react';
import { GeneralInfoType, GeneralInfoEnum } from '../../types/generalInfoType';
import TextInput from '../ui/TextInput/TextInput';
import { useCvStore } from '../../store';
import ControlButton from '../ui/ControlButton/ControlButton';
// constants
import { TEXT_LENGTHS } from '../../constants/inputTextLengths';

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
        placeholder={GeneralInfoEnum.firstName}
        maxLength={TEXT_LENGTHS.general.firstName}
      />
      <TextInput
        value={generalInfo.lastName}
        onType={handleChange}
        name={GeneralInfoEnum.lastName}
        placeholder={GeneralInfoEnum.lastName}
        maxLength={TEXT_LENGTHS.general.lastName}
      />
      <TextInput
        value={generalInfo.position}
        onType={handleChange}
        name={GeneralInfoEnum.position}
        placeholder={GeneralInfoEnum.position}
        maxLength={TEXT_LENGTHS.general.position}
      />
      <TextInput
        value={generalInfo.bio}
        onType={handleChange}
        name={GeneralInfoEnum.bio}
        placeholder={GeneralInfoEnum.bio}
        type="textarea"
        maxLength={TEXT_LENGTHS.general.bio}
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
