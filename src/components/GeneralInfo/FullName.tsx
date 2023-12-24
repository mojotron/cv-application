type PropsType = {
  firstName: string;
  lastName: string;
};

function FullName({ firstName, lastName }: PropsType) {
  return (
    <h1 className="flex gap-2">
      <span className="text-xl font-extrabold capitalize">{firstName}</span>
      <span className="text-xl font-normal capitalize">{lastName}</span>
    </h1>
  );
}

export default FullName;
