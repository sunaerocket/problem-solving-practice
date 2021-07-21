const { solution } = require("./2941-croatian-alphabet");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the count', () => {  
  solution("ljes=njak");
  expect(consoleSpy).toHaveBeenCalledWith(6);

  solution("ddz=z=");
  expect(consoleSpy).toHaveBeenCalledWith(3);

  solution("nljj");
  expect(consoleSpy).toHaveBeenCalledWith(3);

  solution("c=c=");
  expect(consoleSpy).toHaveBeenCalledWith(2);
})