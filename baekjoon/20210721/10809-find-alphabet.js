function solution(input) {
  const alphabetMap = new Map();

  for(let i='a'.charCodeAt(0); i<='z'.charCodeAt(0); i++) {
    const character = String.fromCharCode(i);
    
    alphabetMap.set(character, -1);
  }

  [...input].forEach((character, index) => {
    const isExist = alphabetMap.get(character) !== -1;

    if(isExist) {
      return;
    }

    alphabetMap.set(character, index);
  })

  let text = '';

  for(let value of alphabetMap.values()) {
    text += `${value} `
  }

  console.log(text.trim())
}

module.exports = {
  solution,
};