function solution(input) {
  const numbers = input.split('\n')[1].split('').map(value => Number(value));

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

  console.log(sum);
}

module.exports = {
  solution,
};