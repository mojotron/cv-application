import { useState } from 'react';
import FullName from './FullName';
import EditButton from '../ui/EditButton/EditButton';
import { GeneralInfoType } from '../../types/generalInfoType';
import { GENERAL_INFO } from '../../constants/generalInfoDefault';

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] =
    useState<GeneralInfoType>(GENERAL_INFO);

  const [openEdit, setOpenEdit] = useState(false);

  if (openEdit) {
    return <p>HELLO</p>;
  }

  return (
    <section className="grid">
      <FullName
        firstName={generalInfo.firstName}
        lastName={generalInfo.lastName}
      />
      <h2>{generalInfo.position}</h2>
      <p>{generalInfo.bio}</p>
      <img
        src={generalInfo.imageUrl}
        alt={`${generalInfo.firstName} ${generalInfo.lastName}`}
      />
      <EditButton onClick={() => setOpenEdit(true)} />
    </section>
  );
}

export default GeneralInfo;
