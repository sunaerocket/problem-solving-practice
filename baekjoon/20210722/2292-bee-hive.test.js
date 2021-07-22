const { solution } = require("./2292-bee-hive");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the count', () => {  
  solution("13");
  expect(consoleSpy).toHaveBeenCalledWith(3);
})