/* eslint-disable jsx-a11y/control-has-associated-label */
import { BiPrinter } from 'react-icons/bi';

function PrintButton({ onPrint }: { onPrint: () => void }) {
  return (
    <button
      title="Save to PDF!"
      type="button"
      className="rounded-full p-2 fixed bottom-10 right-10 bg-cyan-500 text-white border border-cyan-500 hover:bg-white hover:text-cyan-500 z-50"
      onClick={onPrint}>
      <BiPrinter size={30} />
    </button>
  );
}

export default PrintButton;
