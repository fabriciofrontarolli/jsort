export function parseCurrency(value) {
  return Number(value.replace(/[^0-9\.\-]+/g, ''));
}

export function parseDate(date) {
  if (date.toString().match(/^\d{4}-\d{2}-\d{2}$/g)) {
    date += ' 00:00:00';
  }

  return Date.parse(date);
}
