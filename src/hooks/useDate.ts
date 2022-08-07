export function getDate() {
  const date = Date.now();
  const newDate = new Date(date);
  return newDate.toDateString();
}
