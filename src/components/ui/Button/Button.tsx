import { ReactNode } from 'react';

type PropsType = {
  onClick: () => void;
  children: ReactNode;
  submit?: boolean;
};

function Button({ onClick, children, submit = false }: PropsType) {
  return (
    <button
      className="py-1 px-5 bg-transparent font-bold border-2 border-slate-400 text-slate-400 hover:border-slate-500 hover:bg-slate-200 hover:text-slate-500"
      type={submit ? 'submit' : 'button'}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
