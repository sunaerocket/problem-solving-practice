function solution(input) {
  let text = '';

  let isOn = true;

  while(isOn) {
    const [a, b] = input.shift().split(' ').map((value) => parseInt(value));

    const sum = a + b;
    
    if(sum === 0) {
      isOn = false;
      break;
    }
    
    text += `${sum}\n`
  }

  console.log(text);
}

module.exports = {
  solution,
};