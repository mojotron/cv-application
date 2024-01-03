import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function SectionHeading({ children }: PropsType) {
  return <h2 className="text-slate-500">{children}</h2>;
}

export default SectionHeading;
