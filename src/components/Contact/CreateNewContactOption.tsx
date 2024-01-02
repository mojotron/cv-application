import { useState } from 'react';
import { useCvStore } from '../../store';
import { ContactOption, ContactType } from '../../types/contactType';
import { iconsConfig } from './iconsConfig';
import TextInput from '../ui/TextInput/TextInput';

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
    <div>
      <button
        type="button"
        className="px-4 py-1 text-slate-500 hover:bg-slate-500 hover:text-slate-100"
        onClick={() => setShowOptions((oldValue) => !oldValue)}>
        {showOptions ? 'Hide options' : 'Add new option'}
      </button>

      {showOptions && (
        <ul className="flex flex-col gap-2 py-2 shadow-lg">
          {nonSelectedContactOptions.map((optionName) => (
            <li
              key={optionName}
              className="flex gap-2 items-center"
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
        <TextInput
          placeholder={`${selectedOption} field`}
          value={optionValue}
          onType={(e) => setOptionValue(e.target.value)}
        />
      )}

      {optionValue.length > 0 && (
        <button type="button" onClick={handleAddOption}>
          Add
        </button>
      )}
    </div>
  );
}

export default CreateNewContactOption;
