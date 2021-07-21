const { solution } = require("./2675-repeat-string");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the new string', () => {
  const input = "2\n3 ABC\n5 /HTP"
  const result = `AAABBBCCC
/////HHHHHTTTTTPPPPP`;
  
  solution(input);
  expect(consoleSpy).toHaveBeenCalledWith(result);
})