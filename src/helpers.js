const splitOnCamelCase = string =>
  string
    .split(/(?=[A-Z])/)
    .map(s => s.toLowerCase())
    .join(' ');

export default splitOnCamelCase;
