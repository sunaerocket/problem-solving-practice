const { solution } = require("./14681-pick-quadrant");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("returns the quadrant", () => {
  solution(12, 5);
  expect(consoleSpy).toHaveBeenCalledWith(1);

  solution(9, -13);
  expect(consoleSpy).toHaveBeenCalledWith(4);
});

