import { ChangeEvent } from 'react';

type PropsType = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

function DateInput({ label, value, onChange, name }: PropsType) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="date"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default DateInput;
