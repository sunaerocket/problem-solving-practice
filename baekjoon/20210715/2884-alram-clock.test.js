const { solution } = require("./2884-alram-clock");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("returns the target hour and minute", () => {
  solution(10, 10);
  expect(consoleSpy).toHaveBeenCalledWith('9 25');
  
  solution(0, 30);
  expect(consoleSpy).toHaveBeenCalledWith('23 45');

  solution(23, 40);
  expect(consoleSpy).toHaveBeenCalledWith('22 55');
});

