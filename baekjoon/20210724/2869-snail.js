function solution(input) {
  // A: 달팽이가 하루에 올라가는 거리
  // B: 달팽이가 하루에 내려가는 거리
  // V: 달팽이가 올라가는 나무의 높이
  // 도착하면 미끄러지지 않는다.
  const [a, b, v] = input.split(" ").map((value) => Number(value));

  console.log(Math.ceil((v - b) / (a - b)));
}

module.exports = {
  solution,
};
