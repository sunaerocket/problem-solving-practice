function solution(input) {
  let text = '';

  let isOn = true;

  while(isOn) {
    const isLast = input.length === 0;

    if(isLast) {
      isOn = false;
      break;
    }

    const [a, b] = input.shift().split(' ').map((value) => parseInt(value));

    const sum = a + b;
    
    text += `${sum}\n`
  }

  console.log(text);
}

module.exports = {
  solution,
};