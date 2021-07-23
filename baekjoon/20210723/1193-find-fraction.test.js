const { solution } = require('./1193-find-fraction');

const consoleSpy = jest.spyOn(console, 'log');

afterEach(() => {
  consoleSpy.mockClear();
});

test('prints the fraction', () => {
  solution('3');
  expect(consoleSpy).toHaveBeenCalledWith('2/1');

  solution('5');
  expect(consoleSpy).toHaveBeenCalledWith('2/2');

  solution('14');
  expect(consoleSpy).toHaveBeenCalledWith('2/4');
});
