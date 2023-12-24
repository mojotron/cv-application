// eslint-disable-next-line import/no-extraneous-dependencies
import { BiEditAlt } from 'react-icons/bi';

type PropsType = {
  onClick: () => void;
};

function EditButton({ onClick }: PropsType) {
  return (
    <button type="button" onClick={onClick} aria-label="edit">
      <BiEditAlt />
    </button>
  );
}

export default EditButton;
