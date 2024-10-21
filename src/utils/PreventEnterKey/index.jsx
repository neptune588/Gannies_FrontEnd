export const preventEnterKey = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
};
