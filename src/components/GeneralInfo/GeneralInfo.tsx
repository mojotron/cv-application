import { useState } from 'react';
import FullName from './FullName';
import EditButton from '../ui/EditButton/EditButton';
import { GeneralInfoType } from '../../types/generalInfoType';
import { GENERAL_INFO } from '../../constants/generalInfoDefault';
import GeneralInfoForm from './GeneralInfoForm';
import Avatar from '../ui/Avatar/Avatar';
import Position from './Position';
import Bio from './Bio';

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] =
    useState<GeneralInfoType>(GENERAL_INFO);

  const [openEdit, setOpenEdit] = useState(false);

  return (
    <section className="flex gap-8 justify-between">
      {openEdit ? (
        <GeneralInfoForm data={generalInfo} />
      ) : (
        <div className="flex flex-col relative">
          <FullName
            firstName={generalInfo.firstName}
            lastName={generalInfo.lastName}
          />
          <Position>{generalInfo.position}</Position>
          <Bio>{generalInfo.bio}</Bio>
          <EditButton onClick={() => setOpenEdit(true)} />
        </div>
      )}

      <Avatar
        imageUrl={generalInfo.imageUrl}
        alt={`${generalInfo.firstName} ${generalInfo.lastName}`}
      />
    </section>
  );
}

export default GeneralInfo;
