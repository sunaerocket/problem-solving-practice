function solution(input) {
  let text = '';

  input.forEach((element) => {
    const [a, b] = element.split(' ').map((value) => parseInt(value));

    const sum = a + b;

    if(isNaN(sum)) {
      return
    }

    text += `${sum}\n`
  })

  console.log(text);
}

module.exports = {
  solution,
};