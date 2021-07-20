const { solution } = require("./1065-arithmetic-practice");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('returns the number', () => {
  solution(110);
  expect(consoleSpy).toHaveBeenCalledWith(99);

  solution(1);
  expect(consoleSpy).toHaveBeenCalledWith(1);

  solution(210);
  expect(consoleSpy).toHaveBeenCalledWith(105);
  
  solution(1000);
  expect(consoleSpy).toHaveBeenCalledWith(144);
})