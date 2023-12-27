import GeneralInfoForm from './GeneralInfoForm';
import Avatar from '../ui/Avatar/Avatar';
import GeneralInfoDetails from './GeneralInfoDetails';
import { useCvStore } from '../../store';

function GeneralInfo() {
  const generalInfo = useCvStore((state) => state.generalInfo);
  const openEdit = useCvStore((state) => state.editGeneralInfo);

  return (
    <section className="flex gap-8 justify-between">
      {openEdit ? (
        <GeneralInfoForm data={generalInfo} />
      ) : (
        <GeneralInfoDetails data={generalInfo} />
      )}

      <Avatar
        imageUrl={generalInfo.imageUrl}
        alt={`${generalInfo.firstName} ${generalInfo.lastName}`}
      />
    </section>
  );
}

export default GeneralInfo;
