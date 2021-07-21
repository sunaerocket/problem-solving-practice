const { solution } = require("./11720-sum-of-numbers");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('returns the sum value', () => {
  solution('1\n1');
  expect(consoleSpy).toHaveBeenCalledWith(1);

  solution('5\n54321');
  expect(consoleSpy).toHaveBeenCalledWith(15);

  solution('25\n7000000000000000000000000');
  expect(consoleSpy).toHaveBeenCalledWith(7);
  
  solution('11\n10987654321');
  expect(consoleSpy).toHaveBeenCalledWith(46);
})