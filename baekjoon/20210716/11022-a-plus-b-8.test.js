const { solution } = require("./11022-a-plus-b-8");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];
  const result = `Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

