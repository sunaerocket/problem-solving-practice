const { solution } = require("./2557-hello-world");

test("print 'Hello World!'", () => {
  const consoleSpy = jest.spyOn(console, "log");

  solution();

  expect(consoleSpy).toHaveBeenCalledWith("Hello World!");
});
