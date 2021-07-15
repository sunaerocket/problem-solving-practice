function solution(hour, minute) {
  const date = new Date(2021, 5, 9, hour, minute);

  date.setMinutes(date.getMinutes() - 45);

  console.log(`${date.getHours()} ${date.getMinutes()}`);
}

module.exports = {
  solution,
};