import {
  BiEditAlt as IconEdit,
  BiTrash as IconDelete,
  BiCheck as IconUpdate,
  BiPlus as IconNew,
  BiX as IconCancel,
  BiDownArrow as IconExpand,
  BiUpArrow as IconCollapse,
} from 'react-icons/bi';
import type { ControlType } from './ControlButton';

type PropsType = {
  controlOption: ControlType;
  size: number;
};

function ControlIcon({ controlOption, size }: PropsType) {
  switch (controlOption) {
    case 'edit':
      return <IconEdit size={size} />;
    case 'delete':
      return <IconDelete size={size} />;
    case 'update':
      return <IconUpdate size={size} />;
    case 'new':
      return <IconNew size={size} />;
    case 'cancel':
      return <IconCancel size={size} />;
    case 'expand':
      return <IconExpand size={size} />;
    case 'collapse':
      return <IconCollapse size={size} />;
    default:
      return null;
  }
}

export default ControlIcon;
