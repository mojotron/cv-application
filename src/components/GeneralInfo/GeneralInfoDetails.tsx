import { useCvStore } from '../../store';
import { GeneralInfoType } from '../../types/generalInfoType';
import EditButton from '../ui/EditButton/EditButton';

type PropsType = {
  data: GeneralInfoType;
};

function GeneralInfoDetails({ data }: PropsType) {
  const openEdit = useCvStore((state) => state.setEditGeneralInfo);

  return (
    <div className="flex flex-col relative">
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

      <EditButton onClick={() => openEdit(true)} />
    </div>
  );
}

export default GeneralInfoDetails;
