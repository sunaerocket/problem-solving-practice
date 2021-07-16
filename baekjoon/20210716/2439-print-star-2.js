function solution(n) {
  let text = '';

  for(let i=1 ; i <= n ; i++) {
    text += printStar(i, n);
  }

  console.log(text);
}

function printStar(row, max) {
  let text = '';

  const space = max - row;

  for (let i=1; i<=space; i++) {
    text += ' ';
  }

  for (let i=1; i<=row; i++) {
    text += '*';
  }

  text += '\n';

  return text;
}

module.exports = {
  solution,
};