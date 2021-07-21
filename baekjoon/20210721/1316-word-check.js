function solution(input) {
  const words = input.split('\n').splice(1);

  const groupWords = [];

  for(let word of words) {
    const isGroupWord = checkWord(word);

    if(isGroupWord) {
      groupWords.push(word);
    }
  }

  console.log(groupWords.length);
}

function checkWord(word) {
  let isGroupWord = true;
  const characters = [];

  for(let character of [...word]) {
    const isNew = characters.indexOf(character) === -1;
    const isSeparated = characters.indexOf(character) !== characters.length-1;

    if(isNew) {
      characters.push(character);
      continue;
    }

    if(isSeparated) {
      isGroupWord = false;
      break;
    }
  }

  return isGroupWord;
}

module.exports = {
  solution,
};