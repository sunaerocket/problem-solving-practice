const { solution } = require("./10871-number-less-than-x");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the star pattern", () => {
  const list = [1,10,4,9,2,3,8,5,7,6];
  const result = `1 4 2 3`;

  solution(10, 5, list);
  
  expect(consoleSpy).toBeCalledWith(result);
});

