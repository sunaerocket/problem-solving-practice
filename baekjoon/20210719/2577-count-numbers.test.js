const { solution } = require("./2577-count-numbers");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the number counts", () => {
  const input = "150\n266\n427";

  const output = "3\n1\n0\n2\n0\n0\n0\n2\n0\n0";

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});

