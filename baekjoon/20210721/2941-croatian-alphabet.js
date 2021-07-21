function solution(input) {

  const regex = new RegExp('c=|c-|dz=|d-|lj|nj|s=|z=', 'g');

  const result = input.replace(regex, ' ');
  
  console.log(result.length);
}

module.exports = {
  solution,
};