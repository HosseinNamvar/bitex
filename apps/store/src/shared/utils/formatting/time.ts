const pad = (num: number) => num.toString().padStart(2, "0");

export const getFullTimeString = (time: Date): string => {
  const year = time.getFullYear();
  const month = pad(time.getMonth() + 1);
  const date = pad(time.getDate());
  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return `${year}.${month}.${date}  --  ${hours}:${minutes}:${seconds}`;
};
