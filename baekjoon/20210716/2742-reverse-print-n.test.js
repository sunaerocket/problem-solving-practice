const { solution } = require("./2742-reverse-print-n");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints series of number 'n'", () => {
  solution(5);
  
  expect(consoleSpy).toBeCalledWith("5\n4\n3\n2\n1\n");
});

