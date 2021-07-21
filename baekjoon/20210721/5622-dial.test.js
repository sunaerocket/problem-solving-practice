const { solution } = require("./5622-dial");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the time', () => {  
  solution("UNUCIC");
  expect(consoleSpy).toHaveBeenCalledWith(36);
})