const { solution } = require("./10818-min-max");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints min and max values", () => {
  const input = `5
20 10 35 30 7`;

  const output = "7 35";

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});

