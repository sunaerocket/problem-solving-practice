const { solution } = require("./1546-manipulate-score");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the malicious average", () => {
  const input = "3\n40 80 60";

  const output = 75.0;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});

test("prints the malicious average - 2", () => {

  const input = "3\n10 20 30";
  const output = 66.666667;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})

test("prints the malicious average - 3", () => {
  const input = "4\n1 100 100 100";
  const output = 75.25;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})

test("prints the malicious average - 4", () => {
  const input = "5\n1 2 4 8 16";
  const output = 38.75;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})

test("prints the malicious average - 5", () => {
  const input = "2\n3 10";
  const output = 65.0;

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
})