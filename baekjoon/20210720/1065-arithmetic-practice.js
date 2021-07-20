function solution(input) {
  const numberSet = new Set();

  for(let i=input; i > 0; i--) {
    const array = [...i.toString()].map(value => Number(value));
    const isLessThan3Digit = array.length < 3;

    if (isLessThan3Digit) {
      numberSet.add(i);
      continue;
    }

    const gapSet = new Set();

    array.forEach((digit, index, array) => {
      const isLast = index === array.length - 1;

      if(isLast) {
        return;
      }

      const gap = digit - array[index+1]; 

      gapSet.add(gap);
    })

    const isSameGap = gapSet.size === 1;

    if (isSameGap) {
      numberSet.add(i);
    }
  }


  console.log(numberSet.size);
}



module.exports = {
  solution,
};