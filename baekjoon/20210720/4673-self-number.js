/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

function solution() {
  const selfNumbers = getSelfNumbers();

  print(selfNumbers);
}

function print(array) {
  let text = '';

  array.forEach((element, index, array) => {
    const isLast = index === (array.length-1);

    if(isLast) {
      text += element;
      return;
    }

    text += `${element}\n`;
  })

  console.log(text);
}

function getSelfNumbers() {
  const limit = 10000;
  const numbers = new Array(limit + 1).fill(true);

  let index = 1;

  while(true) {
    const number = d(index);

    numbers[number] = false;

    if(index === limit) {
      break;
    }

    index += 1;
  }

  const selfNumbers = numbers.map((isSelfNumber, index) => {
    if(isSelfNumber) {
      return index;
    }
  }).filter((element) => element !== undefined).splice(1);

  return selfNumbers;
}

function d(n) {
  const digits = [...n.toString()].map(value => Number(value));

  const number = digits.reduce((acc, current) => acc +current) + n;

  return number;
}

module.exports = {
  solution,
  d,
  getSelfNumbers,
};