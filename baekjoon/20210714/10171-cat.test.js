const { solution } = require("./10171-cat");

test("print the cat ascii art", () => {
  const consoleSpy = jest.spyOn(console, "log");

  const theCat = "\\    /\\\n\
  )  ( ')\n\
  (  /  )\n\
  \\(__)|";

  solution();

  expect(consoleSpy).toHaveBeenCalledWith(theCat);
});
