const { solution } = require("./1152-counting-words");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test('prints the most used alphabet', () => {  
  solution("The Curious Case of Benjamin Button");
  expect(consoleSpy).toHaveBeenCalledWith(6);

  solution(" Mazatneunde Wae Teullyeoyo");
  expect(consoleSpy).toHaveBeenCalledWith(3);

  solution("Teullinika Teullyeotzi ");
  expect(consoleSpy).toHaveBeenCalledWith(2);
})