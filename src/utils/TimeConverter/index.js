export const TimeConverter = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const stringMinutes = minutes.toString().padStart(1);
  const stringSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${stringMinutes}:${stringSeconds}`;
};
