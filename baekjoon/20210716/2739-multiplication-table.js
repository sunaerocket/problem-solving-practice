function solution(number) {
  [1,2,3,4,5,6,7,8,9].forEach((item) => {
    console.log(`${number} * ${item} = ${number * item}`)
  })
}

module.exports = {
  solution,
};