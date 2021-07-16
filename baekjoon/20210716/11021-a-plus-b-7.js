function solution(input) {
  let text = '';

  input.forEach((element, index) => {
    const [a, b] = element.split(' ').map((value) => parseInt(value));

    const sum = a + b;

    if(isNaN(sum)) {
      return
    }

    text += `Case #${index}: ${sum}\n`
  })

  console.log(text);
}

module.exports = {
  solution,
};