function solution(input) {
  const word = input.toLowerCase();

  const alphabetMap = new Map();

  [...word].forEach((character) => {
    const isExist = alphabetMap.has(character);
    
    if(isExist) {
      const prevValue = alphabetMap.get(character);

      alphabetMap.set(character, prevValue+1);
      
      return;
    }

    alphabetMap.set(character, 1);
  })

  const max = Math.max(...alphabetMap.values());

  const alphabets = [];

  for(let [key, value] of alphabetMap) {
    if(value === max) {
      alphabets.push(key);
    }
  }

  let text = '';

  const isSingular = alphabets.length === 1;

  if(isSingular) {
    text = alphabets[0].toUpperCase();
  } else {
    text = "?";
  }

  console.log(text);
}

module.exports = {
  solution,
};