function solution(input) {
  // 셀 범위 => 1, 2~7, 8~19, 20~37, 38~61...
  // 셀 범위 = 레벨 최초값 + 레벨*6
  const number = Number(input);

  let level = 1;
  let rangeMax = 1;

  while(rangeMax < number) {
    rangeMax += level*6;
    level += 1;
  }

  console.log(level);
}

module.exports = {
  solution,
};