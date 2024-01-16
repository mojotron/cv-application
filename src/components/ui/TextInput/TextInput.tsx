import { ChangeEvent } from 'react';
import { splitCamelCase } from '../../../utils/splitCamelCase';

type PropsType = {
  value: string;
  onType: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
  type?: 'input' | 'textarea';
  maxLength?: number | undefined;
};

function TextInput({
  value,
  onType,
  name = undefined,
  placeholder = 'Input',
  type = 'input',
  maxLength = undefined,
}: PropsType) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (maxLength !== undefined && e.target.value.length > maxLength) return;

    onType(e);
  };

  return (
    <div className="w-full flex flex-col text-slate-700">
      {type === 'input' && (
        <input
          className="p-2 border border-cyan-300 bg-neutral-100 rounded-md"
          type="text"
          value={value}
          name={name}
          onChange={handleChange}
          max={maxLength}
          placeholder={splitCamelCase(placeholder)}
        />
      )}
      {type === 'textarea' && (
        <textarea
          className="p-2 border border-cyan-300 bg-neutral-100 rounded-md"
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
      {maxLength !== undefined && (
        <span className="ml-auto text-slate-400 text-xs">
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

export default TextInput;
