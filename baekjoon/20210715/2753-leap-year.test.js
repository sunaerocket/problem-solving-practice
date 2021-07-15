const { solution } = require("./2753-leap-year");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("returns the leap year flag", () => {
  solution(2000);
  expect(consoleSpy).toHaveBeenCalledWith(1);

  solution(1999);
  expect(consoleSpy).toHaveBeenCalledWith(0);
});

