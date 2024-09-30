export const formatDateToPost = (date) => {
  const createDate = new Date(date);

  const year = createDate.getFullYear();
  const month = String(createDate.getMonth() + 1).padStart(2, '0');
  const day = String(createDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
