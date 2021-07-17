const { solution } = require("./10951-a-plus-b-4");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = ['1 1', '2 3', '3 4', '9 8', '5 2'];
  const result = `2
5
7
17
7
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

