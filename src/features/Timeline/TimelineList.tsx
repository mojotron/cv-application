import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function TimelineList({ children }: PropsType) {
  return <ul className="border-l-4 border-neutral-300 px-4">{children}</ul>;
}

export default TimelineList;
