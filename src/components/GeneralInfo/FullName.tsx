type PropsType = {
  firstName: string;
  lastName: string;
};

function FullName({ firstName, lastName }: PropsType) {
  return (
    <h1 className="flex gap-2 mb-4">
      <span className="text-3xl font-extrabold capitalize text-slate-700">
        {firstName}
      </span>
      <span className="text-3xl font-normal capitalize text-slate-500">
        {lastName}
      </span>
    </h1>
  );
}

export default FullName;
