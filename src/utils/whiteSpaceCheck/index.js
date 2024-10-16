export const isIncludesWhiteSpaceCheck = (value) => {
  return value.includes(' ');
};

export const isOnlyWhiteSpaceCheck = (value) => {
  console.log(value);
  return value.trim().length === 0;
};
