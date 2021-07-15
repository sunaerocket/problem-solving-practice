function solution(year) {
  const is4multiple = year%4 === 0;
  const is100multiple = year%100 === 0;
  const is400multiple = year%400 === 0;

  if (is4multiple) {
    if (is4multiple && is100multiple) {
      if (is400multiple) {
        console.log(1);
        return;
      }
      console.log(0);
      return;
    }
    console.log(1);
    return;
  }
  
  console.log(0);
}

module.exports = {
  solution,
};