const { solution } = require("./1316-word-check");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the count', () => {  
  solution("3\nhappy\nnew\nyear");
  expect(consoleSpy).toHaveBeenCalledWith(3);

  solution("4\naba\nabab\nabcabc\na");
  expect(consoleSpy).toHaveBeenCalledWith(1);
})