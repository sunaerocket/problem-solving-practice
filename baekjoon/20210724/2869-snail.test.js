const { solution } = require("./2869-snail");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
  consoleSpy.mockClear();
});

test("prints the fraction", () => {
  solution("2 1 5");
  expect(consoleSpy).toHaveBeenCalledWith(4);

  solution("5 1 6");
  expect(consoleSpy).toHaveBeenCalledWith(2);

  solution("100 99 1000000000");
  expect(consoleSpy).toHaveBeenCalledWith(999999901);
});
