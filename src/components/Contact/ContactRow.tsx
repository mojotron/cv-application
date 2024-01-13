import { iconsConfig } from './iconsConfig';
import { ContactType } from '../../types/contactType';

function ContactRow({ data }: { data: ContactType }) {
  return (
    <li className="flex gap-4 text-slate-600 text-sm items-center">
      <span>{iconsConfig[data.name]}</span>
      <span className="w-full">{data.value}</span>
    </li>
  );
}

export default ContactRow;
