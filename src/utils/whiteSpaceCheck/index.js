export const isIncludesWhiteSpaceCheck = (value) => {
  return value.includes(' ');
};

export const isOnlyWhiteSpaceCheck = (value) => {
  return value.trim().length === 0;
};
