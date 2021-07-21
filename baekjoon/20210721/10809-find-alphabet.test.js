const { solution } = require("./10809-find-alphabet");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('returns the sum value', () => {
  const result = "1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1";
  
  solution('baekjoon');
  expect(consoleSpy).toHaveBeenCalledWith(result);
})