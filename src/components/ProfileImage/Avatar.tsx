import { useCvStore } from '../../store';
import ControlButton from '../ui/ControlButton/ControlButton';
import HoverVisibility from '../ui/HoverVisibility/HoverVisibility';

function Avatar() {
  const imageUrl = useCvStore((state) => state.profileImage);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  const { firstName, lastName } = useCvStore((state) => state.generalInfo);

  return (
    <section className="relative flex items-end group">
      <HoverVisibility topRight={true}>
        <ControlButton
          control="edit"
          onClick={() => setCurrentEdit('image')}
        />
      </HoverVisibility>

      <img
        className="min-h-[150px] min-w-[150px] max-h-[150px] max-w-[150px] rounded-full cursor-pointer border border-neutral-500"
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
      />
    </section>
  );
}

export default Avatar;
