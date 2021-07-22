function solution(input) {
  // 고정비 + 변동비 < 이윤
  // 고정비 + 변동비 * 수량 < 가격 * 수량
  // 고정비 < (가격 - 변동비) 수량
  const [fixedCost, variableCost, price] = input.split(' ').map(value => Number(value));

  let result = -1;
  
  const isProfit = (price - variableCost) > 0

  if(isProfit) {
    const count = Math.floor(fixedCost / (price - variableCost)) + 1;
    result = count;
  }

  console.log(result);
}

module.exports = {
  solution,
};