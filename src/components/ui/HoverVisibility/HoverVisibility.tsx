import { CSSProperties, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  topRight?: boolean;
};

const topRightStyles: CSSProperties = {
  position: 'absolute',
  top: '0',
  right: '0',
};

function HoverVisibility({ children, topRight = false }: PropsType) {
  return (
    <div
      className="invisible group-hover:visible"
      style={topRight ? topRightStyles : undefined}>
      {children}
    </div>
  );
}

export default HoverVisibility;
