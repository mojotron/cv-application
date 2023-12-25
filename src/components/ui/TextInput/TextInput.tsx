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

  if (type === 'input') {
    return (
      <div>
        <input
          type="text"
          value={value}
          name={name}
          onChange={handleChange}
          max={maxLength}
          placeholder={placeholder}
        />
        {maxLength !== undefined && (
          <span>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    );
  }

  return (
    <textarea
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
