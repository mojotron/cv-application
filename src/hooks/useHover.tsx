import { useState, useCallback, useRef } from 'react';

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  const handleMouseOver = useCallback(() => setIsHovering(true), []);
  const handleMouseOut = useCallback(() => setIsHovering(false), []);

  const hoverRef = useCallback(
    (node: HTMLElement) => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener('mouseover', handleMouseOver);
        nodeRef.current.removeEventListener('mouseout', handleMouseOut);
      } else {
        nodeRef.current = node;
        nodeRef.current.addEventListener('mouseover', handleMouseOver);
        nodeRef.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut],
  );

  return { hoverRef, isHovering };
};
