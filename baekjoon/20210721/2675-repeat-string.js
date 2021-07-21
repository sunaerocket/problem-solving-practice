function solution(input) {
  const lines = input.split('\n');

  let text = '';

  [...lines].forEach((line) => {
    const lineArray = line.split(' ');
    const isValid = lineArray.length === 2;

    if(isValid) {
      const repetition = Number(lineArray[0]);
      const sentence = lineArray[1];

      [...sentence].forEach((character, index, array) => {
        for(let i=0; i<repetition; i++) {
          text += character;
        }

        const isLast = index === array.length-1;

        if(isLast) {
          text += '\n';
        }
      })
    }
  })

  console.log(text.trim());
}

module.exports = {
  solution,
};