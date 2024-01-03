import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

function Timeline({ children }: PropsType) {
  return (
    <section>
      <ul className="border-l-4 p-4">{children}</ul>
    </section>
  );
}

export default Timeline;
