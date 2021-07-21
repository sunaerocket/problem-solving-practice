function solution(input) {
  const sentence = input.trim();

  const count = sentence.split(' ').filter(value => value.trim() !== '').length;

  console.log(count);
}

module.exports = {
  solution,
};