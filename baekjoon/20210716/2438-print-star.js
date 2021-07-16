function solution(n) {
  let text = '';

  for(let i=1 ; i <= n ; i++) {
    text += printStar(i);
  }

  console.log(text);
}

function printStar(n) {
  let star = ''

  for(let i = 0; i < n ; i++) {
    const isLast = (i === n-1);

    star += '*';

    if(isLast) {
      star += '\n'
    }
  }

  return star;
}

module.exports = {
  solution,
};