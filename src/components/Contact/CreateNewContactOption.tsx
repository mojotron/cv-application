import { useState } from 'react';
import { useCvStore } from '../../store';
import { ContactOption, ContactType } from '../../types/contactType';
import { iconsConfig } from './iconsConfig';
import TextInput from '../ui/TextInput/TextInput';
import ControlButton from '../ui/ControlButton/ControlButton';

function CreateNewContactOption() {
  const contact = useCvStore((state) => state.contact);
  const setContact = useCvStore((state) => state.setContact);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    null | keyof typeof ContactOption
  >(null);
  const [optionValue, setOptionValue] = useState('');

  const nonSelectedContactOptions = Object.keys(iconsConfig).filter(
    (contactOption) =>
      !contact.find((usedOption) => usedOption.name === contactOption),
  );

  const handleSelectOption = (contactOption: keyof typeof ContactOption) => {
    setSelectedOption(contactOption);
    setShowOptions(false);
  };

  const handleAddOption = () => {
    if (selectedOption === null) return;
    setSelectedOption(null);
    setOptionValue('');
    const newContact: ContactType[] = [
      ...contact,
      { name: selectedOption, value: optionValue },
    ];
    setContact(newContact);
  };

  return (
    <div className="relative">
      <ControlButton
        control={showOptions ? 'collapse' : 'expand'}
        onClick={() => setShowOptions((oldValue) => !oldValue)}>
        Select Contact Field
      </ControlButton>

      {showOptions && (
        <ul className="w-full rounded-md py-4 flex flex-col shadow-lg absolute bg-white border border-cyan-400 transition-all ease-in-out delay-250 z-10">
          {nonSelectedContactOptions.map((optionName) => (
            <li
              key={optionName}
              className="py-2 pl-6 rounded-lg flex gap-2 items-center hover:text-cyan-700 cursor-pointer hover:bg-cyan-100"
              onClick={() =>
                handleSelectOption(optionName as keyof typeof ContactOption)
              }>
              <span>
                {iconsConfig[optionName as keyof typeof ContactOption]}
              </span>
              <span>{optionName}</span>
            </li>
          ))}
        </ul>
      )}

      {selectedOption && (
        <div className="flex items-center justify-between gap-1 mt-1 mb-5">
          <TextInput
            placeholder={`${selectedOption} field`}
            value={optionValue}
            onType={(e) => setOptionValue(e.target.value)}
          />

          <div className="flex flex-col justify-center items-center gap-0">
            <ControlButton
              control="cancel"
              onClick={() => setSelectedOption(null)}
              size={25}
            />
            {optionValue.length > 0 && (
              <ControlButton
                control="update"
                onClick={handleAddOption}
                size={25}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateNewContactOption;
