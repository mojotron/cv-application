import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function SectionHeading({ children }: PropsType) {
  return (
    <h2 className="text-slate-500 capitalize font-bold text-2xl">
      {children}
    </h2>
  );
}

export default SectionHeading;
