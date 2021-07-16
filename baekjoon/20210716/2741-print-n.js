function solution(n) {
  let text = '';

  for(let i=1 ; i <= n ; i++) {
    text += `${i}\n`;
  }

  console.log(text);
}

module.exports = {
  solution,
};