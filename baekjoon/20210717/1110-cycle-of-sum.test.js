const { solution } = require("./1110-cycle-of-sum");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the cycle count", () => {
  solution(26);
  expect(consoleSpy).toBeCalledWith(4);

  solution(55);
  expect(consoleSpy).toBeCalledWith(3);

  solution(1);
  expect(consoleSpy).toBeCalledWith(60);

  solution(0);
  expect(consoleSpy).toBeCalledWith(1);
});

