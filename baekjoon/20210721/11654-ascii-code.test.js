const { solution } = require("./11654-ascii-code");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('returns the ascii code', () => {
  solution('A');
  expect(consoleSpy).toHaveBeenCalledWith(65);

  solution('C');
  expect(consoleSpy).toHaveBeenCalledWith(67);

  solution('0');
  expect(consoleSpy).toHaveBeenCalledWith(48);
  
  solution('9');
  expect(consoleSpy).toHaveBeenCalledWith(57);

  solution('a');
  expect(consoleSpy).toHaveBeenCalledWith(97);

  solution('z');
  expect(consoleSpy).toHaveBeenCalledWith(122);
})