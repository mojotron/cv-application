export const localStorageHelpers = <DataType>(key: string) => {
  const write = (data: DataType) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const read = () => {
    const data = localStorage.getItem(key);
    if (data === null) return undefined;
    return JSON.parse(data) as DataType;
  };

  return { write, read };
};
