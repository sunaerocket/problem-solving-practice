function solution(input) {
  const answers = input.split('\n').splice(1);

  const scores = answers.map(answer => {
    let bonus = 0;
    let sum = 0;
    
    [...answer].forEach(character => {
      if(character === 'O') {
        bonus++;
      }

      if(character === 'X') {
        bonus = 0;
      }

      sum += bonus;
    })

    return sum;
  })

  let text = '';

  scores.forEach((score, index, scores) => {
    const isLast = index === (scores.length-1);

    if(isLast) {
      text += score;
      return;
    }

    text += `${score}\n`;
  })

  console.log(text);
}

module.exports = {
  solution,
};