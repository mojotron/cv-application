import { iconsConfig } from './iconsConfig';
import { ContactType } from '../../types/contactType';

function ContactRow({ data }: { data: ContactType }) {
  return (
    <div className="flex gap-4 text-slate-500 text-sm items-center">
      <span>{iconsConfig[data.name]}</span>
      <span className="w-full">{data.value}</span>
    </div>
  );
}

export default ContactRow;
