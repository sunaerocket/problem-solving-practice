const { solution } = require("./1712-bep");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the BEP quantity', () => {  
  solution("1000 70 170");
  expect(consoleSpy).toHaveBeenCalledWith(11);

  solution("3 2 1");
  expect(consoleSpy).toHaveBeenCalledWith(-1);

  solution("2100000000 9 10");
  expect(consoleSpy).toHaveBeenCalledWith(2100000001);
})