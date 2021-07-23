function solution(input) {
  // n=1, 1/1
  // n=2, 1/2, 2/1
  // n=3, 3/1, 2/2, 1/3
  // n=4, 1/4, 2/3, 3/2, 4/1
  // n이 홀수면 분자 증가(1 -> n), 분모 감소(n -> 1)
  // n이 짝수면 분자 감소(n -> 1), 분모 증가(1 -> n)
  // n에서 몇번째 순서인지 알면 분수를 구할 수 있다.

  let remainder = input;
  let count = 0;

  while (remainder > count) {
    count += 1;
    remainder -= count;
  }
  const noRemainder = remainder === 0;
  const n = noRemainder ? count : (count + 1);
  const position = noRemainder ? n : remainder;
  const isOdd = n % 2 !== 0;
  const numerator = isOdd ? (n - position + 1) : position;
  const denominator = isOdd ? position : (n - position + 1);
  const text = `${numerator}/${denominator}`;

  console.log(text);
}

module.exports = {
  solution,
};
