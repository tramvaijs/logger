import format from 'date-fns/format';

export function formatDate(timeFormat, date) {
  return format(date, timeFormat);
}
