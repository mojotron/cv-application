import { iconsConfig } from './iconsConfig';
import { ContactOption } from '../../types/contactType';

function ContactRow({ value, type }: { value: string; type: ContactOption }) {
  return (
    <div className="flex gap-4 text-slate-600 text-sm">
      <span>{iconsConfig[type]}</span>
      <span>{value}</span>
    </div>
  );
}

export default ContactRow;
