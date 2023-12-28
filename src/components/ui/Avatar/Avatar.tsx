import { useCvStore } from '../../../store';

function Avatar() {
  const imageUrl = useCvStore((state) => state.profileImage);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);
  const { firstName, lastName } = useCvStore((state) => state.generalInfo);

  return (
    <img
      onClick={() => setCurrentEdit('image')}
      className="h-[150px] w-[150px] rounded-full hover:opacity-75 cursor-pointer"
      src={imageUrl}
      alt={`${firstName} ${lastName}`}
    />
  );
}

export default Avatar;
