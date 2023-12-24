import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  placeholder?: string;
  value: string;
  onType: Dispatch<SetStateAction<string>>;
};

function TextInput({ value, onType, placeholder = 'type' }: PropsType) {
  return (
    <input
      value={value}
      onChange={e => onType(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
