function solution(input) {
  const [x, y] = input.split(' ');

  const answer = Math.max(reverseNumber(x), reverseNumber(y));

  console.log(answer);
}

function reverseNumber(number) {
  return Number([...number].reverse().join(''));
}

module.exports = {
  solution,
};