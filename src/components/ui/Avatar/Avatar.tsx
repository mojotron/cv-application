import { useHover } from '../../../hooks/useHover';
import { useCvStore } from '../../../store';
import EditButton from '../ControlButton/ControlButton';

function Avatar() {
  const imageUrl = useCvStore((state) => state.profileImage);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  const { firstName, lastName } = useCvStore((state) => state.generalInfo);
  const { hoverRef, isHovering } = useHover();

  return (
    <section ref={hoverRef} className="relative flex items-end">
      {isHovering && <EditButton onClick={() => setCurrentEdit('image')} />}
      <img
        className="min-h-[150px] min-w-[150px] max-h-[150px] max-w-[150px] rounded-full cursor-pointer"
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
      />
    </section>
  );
}

export default Avatar;
