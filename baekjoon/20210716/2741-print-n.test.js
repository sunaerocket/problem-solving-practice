const { solution } = require("./2741-print-n");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints series of number 'n'", () => {
  solution(5);
  
  expect(consoleSpy).toBeCalledWith("1\n2\n3\n4\n5\n");
});

