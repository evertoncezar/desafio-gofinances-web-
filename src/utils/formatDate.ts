import { format, zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (date: Date): string => {
  const znDate = zonedTimeToUtc(date, 'America/Sao_Paulo');
  const formattedDate = format(znDate, 'dd/MM/yyyy');
  return formattedDate;
};
export default formatDate;
