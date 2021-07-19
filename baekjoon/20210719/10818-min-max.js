function solution(input) {
  const numbers = input.split('\n')[1].split(' ').map((value) => Number(value));

  numbers.sort((a, b) => a - b);

  const min = numbers[0];
  const max = numbers[numbers.length - 1];

  console.log(`${min} ${max}`);
}

module.exports = {
  solution,
};