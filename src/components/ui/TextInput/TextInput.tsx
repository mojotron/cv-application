import { ChangeEvent } from 'react';

type PropsType = {
  value: string;
  onType: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
          className="p-2 shadow-lg"
          type="text"
          value={value}
          name={name}
          onChange={handleChange}
          max={maxLength}
          placeholder={placeholder}
        />
      )}
      {type === 'textarea' && (
        <textarea
          className="p-2 shadow-lg"
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
