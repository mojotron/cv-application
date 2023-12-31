import { useState } from 'react';
import { useCvStore } from '../../store';
import { ContactType } from '../../types/contactType';
import { iconsConfig } from './iconsConfig';
import TextInput from '../ui/TextInput/TextInput';

function CreateNewContactOption() {
  const contact = useCvStore((state) => state.contact);
  const setContact = useCvStore((state) => state.setContact);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [optionValue, setOptionValue] = useState('');

  const nonSelectedContactOptions = Object.keys(iconsConfig).filter(
    (co) => !Object.keys(contact).includes(co),
  );

  const handleSelectOption = (contactOption: string) => {
    setSelectedOption(contactOption);
    setShowOptions(false);
  };

  const handleAddOption = () => {
    setSelectedOption(null);
    setOptionValue('');
    setContact({
      ...contact,
      [selectedOption as keyof ContactType]: optionValue,
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowOptions((oldValue) => !oldValue)}>
        {showOptions ? 'Hide' : 'Show'} options
      </button>

      {showOptions && (
        <ul className="flex flex-col gap-2 py-2 shadow-lg">
          {nonSelectedContactOptions.map((optionName) => (
            <li
              key={optionName}
              className="flex gap-2 items-center"
              onClick={() => handleSelectOption(optionName)}>
              <span>{iconsConfig[optionName as keyof ContactType]}</span>
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