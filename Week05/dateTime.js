
function formatDate(date = new Date()) {
  const gap = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${gap(date.getMonth() + 1)}-${gap(date.getDate())} ` 
  +
  `${gap(date.getHours())}:${gap(date.getMinutes())}:${gap(date.getSeconds())}`;
}

export {formatDate}



