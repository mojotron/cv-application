import { useCvStore } from '../../store';
import ControlButton from '../ui/ControlButton/ControlButton';
import HoverVisibility from '../ui/HoverVisibility/HoverVisibility';

function GeneralInfoDetails() {
  const data = useCvStore((state) => state.generalInfo);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  return (
    <section className="flex flex-col relative group">
      <HoverVisibility topRight={true}>
        <ControlButton
          control="edit"
          onClick={() => setCurrentEdit('general')}
        />
      </HoverVisibility>

      <h1 className="flex gap-4 mb-4">
        <span className="text-4xl font-extrabold capitalize text-cyan-800">
          {data.firstName}
        </span>
        <span className="text-4xl font-normal capitalize text-cyan-700">
          {data.lastName}
        </span>
      </h1>

      <h2 className="text-2xl text-cyan-700 mb-2">{data.position}</h2>
      <p className="text-slate-600">{data.bio}</p>
    </section>
  );
}

export default GeneralInfoDetails;
