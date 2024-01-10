import { ChangeEvent } from 'react';

type OptionsType = {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
};

type PropsType = {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options?: OptionsType;
};

function RangeInput({ value, onChange, options = undefined }: PropsType) {
  return (
    <div className="flex flex-col">
      {options?.label && (
        <label htmlFor={options.label}>{options.label}</label>
      )}
      <span>{value}</span>
      <div className="flex">
        {options?.min && <span>{options.min}</span>}
        <input
          className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:-mt-0.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-slate-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-slate-200 [&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-slate-200 [&::-moz-range-track]:rounded-full"
          id={options?.label}
          type="range"
          value={value}
          onChange={onChange}
          min={options?.min}
          max={options?.max}
          step={options?.step}
        />
        {options?.max && <span>{options.max}</span>}
      </div>
    </div>
  );
}

export default RangeInput;
