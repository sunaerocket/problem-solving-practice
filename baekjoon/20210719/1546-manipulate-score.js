function solution(input) {
  const [subjects, scores] = input.split('\n').map((value, index) => {
    if(index === 0) {
      return Number(value);
    }

    return value.split(' ').map(element => Number(element));
  });

  const max = [...scores].sort((a, b) => b - a)[0];

  const fakeScores = scores.map(score => score/max*100);

  const fakeAverage = fakeScores.reduce((accumulator, currentValue) => accumulator + currentValue) / subjects;

  const format = (number) => Math.round(number * 1000000) / 1000000;

  console.log(format(fakeAverage));
}

module.exports = {
  solution,
};