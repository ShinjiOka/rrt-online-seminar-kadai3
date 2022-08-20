import dayjs from 'dayjs';

export type DateTime = String;

export const getCurrentDateTime = (): DateTime => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}