import { iconsConfig } from './iconsConfig';
import { ContactType } from '../../types/contactType';

function ContactRow({ data }: { data: ContactType }) {
  return (
    <div className="flex gap-4 text-slate-600 text-sm">
      <span>{iconsConfig[data.name]}</span>
      <span>{data.value}</span>
    </div>
  );
}

export default ContactRow;
