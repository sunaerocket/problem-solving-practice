function solution(input) {
  const numbers = input.split('\n').map((value) => Number(value));

  const max = [...numbers].sort((a, b) => b - a)[0];
  const index = numbers.findIndex((number) => number === max);

  console.log(`${max}\n${index + 1}`);
}

module.exports = {
  solution,
};