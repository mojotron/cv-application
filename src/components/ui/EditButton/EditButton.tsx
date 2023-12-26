// eslint-disable-next-line import/no-extraneous-dependencies
import { BiEditAlt } from 'react-icons/bi';

type PropsType = {
  onClick: () => void;
};

function EditButton({ onClick }: PropsType) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="edit"
      className="absolute top-0 right-4 text-slate-400 hover:text-slate-800">
      <BiEditAlt size={20} />
    </button>
  );
}

export default EditButton;
