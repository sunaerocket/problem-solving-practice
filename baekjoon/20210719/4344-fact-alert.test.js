const { solution } = require("./4344-fact-alert");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the scores", () => {
  const input = "5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91";

  const output = "40.000%\n57.143%\n33.333%\n66.667%\n55.556%";

  solution(input);
  expect(consoleSpy).toBeCalledWith(output);
});