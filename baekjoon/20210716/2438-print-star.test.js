const { solution } = require("./2438-print-star");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the star pattern", () => {
  const input = 5;
  const result = `*
**
***
****
*****
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

