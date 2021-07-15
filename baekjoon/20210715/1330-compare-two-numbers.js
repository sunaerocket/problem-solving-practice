function solution(a, b) {
  if(a < b) {
		console.log('<');
	}

	if(a > b) {
		console.log('>');
	}

	if(a == b) {
		console.log('==');
	}
}

module.exports = {
  solution,
};