import { ReactNode } from 'react';

function Bio({ children }: { children: ReactNode }) {
  return <div className="text-slate-600">{children}</div>;
}

export default Bio;
