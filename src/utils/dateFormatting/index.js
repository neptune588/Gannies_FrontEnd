export const formatDateToPost = (date) => {
  const createDate = new Date(date);

  const year = createDate.getFullYear();
  const month = String(createDate.getMonth() + 1).padStart(2, '0');
  const day = String(createDate.getDay()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const TimeStringConverter = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const stringMinutes = minutes.toString().padStart(1);
  const stringSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${stringMinutes}:${stringSeconds}`;
};
