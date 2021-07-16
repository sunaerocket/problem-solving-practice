const { solution } = require("./11021-a-plus-b-7");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];
  const result = `Case #1: 2
Case #2: 5
Case #3: 7
Case #4: 17
Case #5: 7
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

