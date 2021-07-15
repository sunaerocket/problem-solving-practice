function solution(score) {
  if(score >= 90) {
    console.log('A');
    return;
  }
  
  if(score >= 80) {
    console.log('B');
    return;
  }

  if(score >= 70) {
    console.log('C');
    return;
  }

  if(score >= 60) {
    console.log('D');
    return;
  }

  console.log('F');
}

module.exports = {
  solution,
};