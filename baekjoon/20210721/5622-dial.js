function solution(input) {
  const numberText = convertToNumberText(input);

  const time = getTime(numberText);

  console.log(time);
}

function getTime(numberText) {
  let sum = 0;

  [...numberText].forEach((value) => {
    const time = Number(value) + 1;

    sum += time;
  })

  return sum;
}


function convertToNumberText(input) {
  const numberMap = getNumberMap();

  let text = '';

  [...input].forEach((character) => {
    text += numberMap.get(character);
  })

  return text;
}

function getNumberMap() {
  const map = new Map();

  const toASCII = (character) => character.charCodeAt(0);

  for(let i=toASCII('A'); i<=toASCII('Z'); i++) {
    const key = String.fromCharCode(i);

    const isGroup2 = i >= toASCII('A') && i <= toASCII('C');
    const isGroup3 = i >= toASCII('D') && i <= toASCII('F');
    const isGroup4 = i >= toASCII('G') && i <= toASCII('I');
    const isGroup5 = i >= toASCII('J') && i <= toASCII('L');
    const isGroup6 = i >= toASCII('M') && i <= toASCII('O');
    const isGroup7 = i >= toASCII('P') && i <= toASCII('S');
    const isGroup8 = i >= toASCII('T') && i <= toASCII('V');
    const isGroup9 = i >= toASCII('W') && i <= toASCII('Z');

    if(isGroup2) {
      map.set(key, 2);
    }

    if(isGroup3) {
      map.set(key, 3);
    }

    if(isGroup4) {
      map.set(key, 4);
    }

    if(isGroup5) {
      map.set(key, 5);
    }

    if(isGroup6) {
      map.set(key, 6);
    }

    if(isGroup7) {
      map.set(key, 7);
    }

    if(isGroup8) {
      map.set(key, 8);
    }

    if(isGroup9) {
      map.set(key, 9);
    }
  }

  return map;
}

module.exports = {
  solution,
};