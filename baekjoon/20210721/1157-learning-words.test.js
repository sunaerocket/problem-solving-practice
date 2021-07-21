const { solution } = require("./1157-learning-words");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the most used alphabet', () => {  
  solution("Mississipi");
  expect(consoleSpy).toHaveBeenCalledWith("?");

  solution("zZa");
  expect(consoleSpy).toHaveBeenCalledWith("Z");

  solution("z");
  expect(consoleSpy).toHaveBeenCalledWith("Z");

  solution("baaa");
  expect(consoleSpy).toHaveBeenCalledWith("A");
})