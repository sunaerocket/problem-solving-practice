const { solution } = require("./10869-operations");

test("print sum, subtract, multiply, divide, leftover operations", () => {
  const consoleSpy = jest.spyOn(console, "log");

  solution(7, 3);

  expect(consoleSpy).toHaveBeenCalledWith(`10
4
21
2
1`);
});
