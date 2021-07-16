function solution(number) {
  let sum = 0;

  for(let i = 0 ; i <= number; i++) {
    sum += i;
  }

  console.log(sum)
}

module.exports = {
  solution,
};