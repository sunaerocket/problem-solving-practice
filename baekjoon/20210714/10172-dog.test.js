const { solution } = require("./10172-dog");

test("print the dog ascii art", () => {
  const consoleSpy = jest.spyOn(console, "log");

  solution();

  expect(consoleSpy).toHaveBeenCalledWith(`|\\_/|
|q p|   /}
( 0 )\"\"\"\\
|\"^\"\`    |
||_/=\\\\__|`);
});
