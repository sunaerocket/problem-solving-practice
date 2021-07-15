function solution(x, y) {
  const isPositiveX = x > 0;
  const isPositiveY = y > 0;

  if (isPositiveX && isPositiveY) {
    console.log(1);
    return;
  }

  if(!isPositiveX && isPositiveY) {
    console.log(2);
    return;
  }

  if(!isPositiveX && !isPositiveY) {
    console.log(3);
    return;
  }

  if(isPositiveX && !isPositiveY) {
    console.log(4);
    return;
  }
}

module.exports = {
  solution,
};