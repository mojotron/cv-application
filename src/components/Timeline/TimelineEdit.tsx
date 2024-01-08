import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function TimelineEdit({ children }: PropsType) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

export default TimelineEdit;
