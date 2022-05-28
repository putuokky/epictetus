export function formatDate(dateString) {
  return (new Date(dateString)).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}