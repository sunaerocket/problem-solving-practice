function solution(input) {
  let count = 0;
  let number = input;
  let sum = 0;
  let isOn = true;

  while(isOn) {
    count++;

    sum = Math.floor(number/10) + number%10;
    number = (number%10)*10 + sum%10;

    if(number === input) {
      break;
    }
  }

  console.log(count);
}

module.exports = {
  solution,
};