function solution(input) {
  const numbers = input.split('\n').map((element) => Number(element));
  
  const leftovers = numbers.map((number) => number % 42);

  const uniqueLeftovers = new Set(leftovers);

  console.log(uniqueLeftovers.size);
}

module.exports = {
  solution,
};