function solution(input) {
  input.forEach((element) => {
    const [a, b] = element.split(' ').map((value) => parseInt(value));

    const sum = a + b;

    if(isNaN(sum)) {
      return
    }

    console.log(a + b)
  })
}

module.exports = {
  solution,
};