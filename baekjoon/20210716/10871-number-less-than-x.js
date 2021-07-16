function solution(n, x, list) {
  const answer = [];
  
  list.forEach((element) => {
    if(element < x) {
      answer.push(element);
    }
  })

  console.log(answer.join(' '))
}

module.exports = {
  solution,
};