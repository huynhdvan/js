const lich = [
  false, // tương đương với ngày 0
  false, // tương đương với ngày 1
  true, // tương đương với ngày 2
  true, // tương đương với ngày 3
  false, // tương đương với ngày 4
  false, // tương đương với ngày 5
  true, // tương đương với ngày 6
  false, // tương đương với ngày 7
];

function tinhDeadline(times, calendar) {
  const day = calendar
    .map((car, i) => (car === false ? i : -1))
    .filter((i) => i !== -1);
  if (day.length >= times) return day[times-1];
  return false;
}

console.log(tinhDeadline(5, lich));
