export const splitCamelCase = (str: string) => {
  return str.replaceAll(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
};
