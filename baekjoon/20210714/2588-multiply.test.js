const { solution } = require("./2588-multiply");

test("print an answer", () => {
  const consoleSpy = jest.spyOn(console, "log");

  solution("472", "385");

  expect(consoleSpy).toHaveBeenCalledWith(`2360
3776
1416
181720`);
});
