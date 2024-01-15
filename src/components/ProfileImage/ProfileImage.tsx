import { useCvStore } from '../../store';
import Avatar from './Avatar';
import UploadImage from './UploadImage';

function ProfileImage() {
  const currentEdit = useCvStore((state) => state.currentEdit);

  return (
    <section>{currentEdit === 'image' ? <UploadImage /> : <Avatar />}</section>
  );
}

export default ProfileImage;
