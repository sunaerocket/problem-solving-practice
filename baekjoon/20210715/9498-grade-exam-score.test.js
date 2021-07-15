const { solution } = require("./9498-grade-exam-score");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("returns the grade", () => {
  solution(100);
  expect(consoleSpy).toHaveBeenCalledWith('A');

  solution(89);
  expect(consoleSpy).toHaveBeenCalledWith('B');

  solution(79);
  expect(consoleSpy).toHaveBeenCalledWith('C');

  solution(69);
  expect(consoleSpy).toHaveBeenCalledWith('D');
  
  solution(59);
  expect(consoleSpy).toHaveBeenCalledWith('F');
});

