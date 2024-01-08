import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function TimelineList({ children }: PropsType) {
  return (
    <section>
      <ul className="border-l-4 p-4 my-8">{children}</ul>
    </section>
  );
}

export default TimelineList;
