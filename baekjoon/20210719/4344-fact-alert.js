function solution(input) {
  const groups = input.split('\n').splice(1);

  let text = '';

  groups.forEach((group, index, groups) => {
    const isLast = index === (groups.length-1);

    const data = group.split(' ');
    const headCount = data[0];
    const scores = data.splice(1).map(value => Number(value));

    const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);

    const average = sum/headCount;

    const aboveAvg = scores.filter((score) => score > average);

    const rate = aboveAvg.length / headCount;

    const format = (number) => (number*100).toFixed(3) + "%";

    if(isLast) {
      text += format(rate);
      return;
    }

    text += `${format(rate)}\n`;
  })
  
  console.log(text)
}

module.exports = {
  solution,
};