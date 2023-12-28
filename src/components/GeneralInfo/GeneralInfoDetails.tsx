import { useState } from 'react';
import { useCvStore } from '../../store';

import EditButton from '../ui/EditButton/EditButton';

function GeneralInfoDetails() {
  const data = useCvStore((state) => state.generalInfo);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  // TODO MAKE HOOK
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <h1 className="flex gap-2 mb-4">
        <span className="text-3xl font-extrabold capitalize text-slate-700">
          {data.firstName}
        </span>
        <span className="text-3xl font-normal capitalize text-slate-500">
          {data.lastName}
        </span>
      </h1>

      <h2 className="text-lg text-slate-600 mb-2">{data.position}</h2>
      <p className="text-slate-600">{data.bio}</p>

      {isHovering && <EditButton onClick={() => setCurrentEdit('general')} />}
    </div>
  );
}

export default GeneralInfoDetails;
