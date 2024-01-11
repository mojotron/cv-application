// eslint-disable-next-line import/no-extraneous-dependencies
import { BiEditAlt, BiTrash, BiCheck, BiPlus } from 'react-icons/bi';

type PropsType = {
  onClick: () => void;
  control: 'edit' | 'delete' | 'update' | 'new';
  absolutePosition?: boolean;
  size?: number;
};

function ControlButton({
  onClick,
  control,
  absolutePosition = false,
  size = 20,
}: PropsType) {
  return (
    <button
      title={control}
      type="button"
      onClick={onClick}
      aria-label="edit"
      className="text-neutral-400 hover:text-cyan-600"
      style={
        absolutePosition
          ? { position: 'absolute', top: '0', right: '0' }
          : undefined
      }>
      {control === 'edit' && <BiEditAlt size={size} />}
      {control === 'delete' && <BiTrash size={size} />}
      {control === 'update' && <BiCheck size={size} />}
      {control === 'new' && <BiPlus size={size} />}
    </button>
  );
}

export default ControlButton;
