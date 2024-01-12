import { ChangeEvent } from 'react';

type PropsType = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

function DateInput({ label, value, onChange, name }: PropsType) {
  return (
    <div className="flex gap-2 items-center">
      <label className="text-lg text-slate-500" htmlFor={label}>
        {label}
      </label>
      <input
        className="p-2 border border-cyan-300 bg-neutral-100 rounded-md text-slate-500"
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
