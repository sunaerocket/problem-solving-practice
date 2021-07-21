const { solution } = require("./2908-saangsoo");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the number', () => {  
  solution("734 893");
  expect(consoleSpy).toHaveBeenCalledWith(437);
})