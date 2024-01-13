import { ReactNode } from 'react';
import ControlIcon from './ControlIcon';

export type ControlType =
  | 'edit'
  | 'delete'
  | 'update'
  | 'new'
  | 'cancel'
  | 'expand'
  | 'collapse';

type ButtonType = 'button' | 'submit' | 'reset';

type OptionsType = {
  btnType: ButtonType;
};

type PropsType = {
  onClick?: () => void;
  control: ControlType;
  absolutePosition?: boolean;
  size?: number;
  options?: OptionsType;
  children?: ReactNode;
};

function ControlButton({
  onClick = undefined,
  control,
  absolutePosition = false,
  size = 20,
  options = undefined,
  children = undefined,
}: PropsType) {
  return (
    <button
      title={control}
      onClick={onClick}
      aria-label="edit"
      className="text-neutral-400 hover:text-cyan-600 flex items-center gap-2"
      style={
        absolutePosition
          ? { position: 'absolute', top: '0', right: '0' }
          : undefined
      }
      // eslint-disable-next-line react/button-has-type
      type={options === undefined ? 'button' : options.btnType}>
      <ControlIcon controlOption={control} size={size} />
      {children !== undefined && children}
    </button>
  );
}

export default ControlButton;
