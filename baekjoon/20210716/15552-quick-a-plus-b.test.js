const { solution } = require("./15552-quick-a-plus-b");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = ['5', '1 1', '12 34', '5 500', '40 60', '1000 1000'];
  const result = `2
46
505
100
2000
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

