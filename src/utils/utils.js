// Функция переводит милисекунды в "часы, минуты"
export function mlsecToHm(mlsec) {
  let h = Math.floor(mlsec / (1000 * 60 * 60));
  let m = Math.floor((mlsec % (1000 * 60 * 60)) / (60 * 1000));
  return `${h}ч${m}м`;
}
