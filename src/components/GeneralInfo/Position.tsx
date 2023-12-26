import { ReactNode } from 'react';

function Position({ children }: { children: ReactNode }) {
  return <div className="text-lg text-slate-600 mb-2">{children}</div>;
}

export default Position;
