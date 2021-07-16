const { solution } = require("./10950-a-plus-b");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(2)
  expect(consoleSpy).toBeCalledWith(5)
  expect(consoleSpy).toBeCalledWith(7)
  expect(consoleSpy).toBeCalledWith(17)
  expect(consoleSpy).toBeCalledWith(7)
});

