function solution(n) {
  let text = '';

  for(let i=n ; i > 0 ; i--) {
    text += `${i}\n`;
  }

  console.log(text);
}

module.exports = {
  solution,
};