export const splitDateToYMDHMS = (date) => {
  const createDate = new Date(date);

  const year = createDate.getFullYear();
  const month = String(createDate.getMonth() + 1).padStart(2, '0');
  const day = String(createDate.getDate()).padStart(2, '0');
  const hours = String(createDate.getHours()).padStart(2, '0');
  const minutes = String(createDate.getMinutes()).padStart(2, '0');
  const seconds = String(createDate.getSeconds()).padStart(2, '0');

  return { year, month, day, hours, minutes, seconds };
};

export const formatDateToPost = ({ date, type = 'common' }) => {
  const createDate = new Date(date);

  const year = createDate.getFullYear();
  const month = String(createDate.getMonth() + 1).padStart(2, '0');
  const day = String(createDate.getDate()).padStart(2, '0');
  const hours = String(createDate.getHours()).padStart(2, '0');
  const minutes = String(createDate.getMinutes()).padStart(2, '0');
  const seconds = String(createDate.getSeconds()).padStart(2, '0');

  if (type === 'common') {
    return `${year}-${month}-${day}`;
  }

  if (type === 'edit') {
    return `${year}-${month}-${day} / ${hours}시 ${minutes}분 ${seconds}초`;
  }
};

export const formatDateToSuspend = (date) => {
  return date.replace('T', ' ').replace('Z', '').slice(0, -4);
};
