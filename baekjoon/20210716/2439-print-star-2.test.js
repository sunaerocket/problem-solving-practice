const { solution } = require("./2439-print-star-2");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the pattern of stars", () => {
  const result = `    *
   **
  ***
 ****
*****
`;

  solution(5);
  
  expect(consoleSpy).toBeCalledWith(result);
});

