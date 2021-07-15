const { solution } = require("./1330-compare-two-numbers");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("a < b returns <", () => {
  solution(1, 2);

  expect(consoleSpy).toHaveBeenCalledWith('<');
});

test("a > b returns >", () => {
  solution(10, 2);
  
  expect(consoleSpy).toHaveBeenCalledWith('>');
});

test("a == b returns ==", () => {
  solution(5, 5);
  
  expect(consoleSpy).toHaveBeenCalledWith('==');
});