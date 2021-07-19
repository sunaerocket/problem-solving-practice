const { solution } = require("./3052-leftovers");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the number count", () => {
  const input = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";

  const output = 10;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});

test("prints the number count - 2", () => {

  const input = "42\n84\n252\n420\n840\n126\n42\n84\n420\n126";
  const output = 1;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})

test("prints the number count - 3", () => {
  const input = "39\n40\n41\n42\n43\n44\n82\n83\n84\n85";
  const output = 6;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})

