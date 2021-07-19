function solution(input) {
  const [x, y, z] = input.split('\n').map((value) => Number(value));

  const multiplication = x * y * z;

  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  [...multiplication.toString()].forEach((value) => {
    const number = Number(value);

    array[number] += 1;
  })

  let text ='';

  array.forEach((value, index, array) => {
    if(index === array.length - 1) {
      text += `${value}`;
      return; 
    }

    text += `${value}\n`;
  })

  console.log(text)
}

module.exports = {
  solution,
};