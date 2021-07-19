const { solution } = require("./8958-oxquiz");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the scores", () => {
  const input = "5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX";

  const output = "10\n9\n7\n55\n30";

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});