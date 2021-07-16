const { solution } = require("./8393-sum");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum", () => {
  solution(3);
  
  expect(consoleSpy).toBeCalledWith(6)
});

