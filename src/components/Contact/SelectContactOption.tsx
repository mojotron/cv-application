import { useState } from 'react';
import { useCvStore } from '../../store';
import { ContactType } from '../../types/contactType';
import { iconsConfig } from './iconsConfig';

function SelectContactOption() {
  const contact = useCvStore((state) => state.contact);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const nonSelectedContactOptions = Object.keys(iconsConfig).filter(
    (co) => !Object.keys(contact).includes(co),
  );

  const handleSelectOption = (contactOption: string) => {
    setSelectedOption(contactOption);
    setShowOptions(false);
  };

  console.log(selectedOption);

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
    </div>
  );
}

export default SelectContactOption;
