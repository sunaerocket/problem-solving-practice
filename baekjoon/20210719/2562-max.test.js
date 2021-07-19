const { solution } = require("./2562-max");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints max value on the first line and its index on the second line", () => {
  const input = "3\n29\n38\n12\n57\n74\n40\n85\n61";

  const output = "85\n8";

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});

