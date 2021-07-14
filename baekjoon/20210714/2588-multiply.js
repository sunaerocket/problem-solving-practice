function solution(a, b) {
  const numbers = [...b].reverse().map((number) => {
    return parseInt(a) * number;
  });

  numbers.push(parseInt(a) * parseInt(b));

  console.log(`${numbers[0]}
${numbers[1]}
${numbers[2]}
${numbers[3]}`);
}

module.exports = {
  solution,
};
