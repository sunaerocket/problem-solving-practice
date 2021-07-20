const { d, getSelfNumbers } = require("./4673-self-number");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

describe('d', () => {
  it('returns the new number', () => {
    expect(d(75)).toEqual(87);
    expect(d(33)).toEqual(39);
    expect(d(39)).toEqual(51);
    expect(d(51)).toEqual(57);
  })
})

describe("getSelfNumber", () => {
  it('returns the self number array', () => {
    const answers = [1,3,5,7,9,20,31,42,53,64,9903,9914,9925,9927,9938,9949,9960,9971,9982,9993];

    const selfNumbers = getSelfNumbers();

    answers.forEach((number) => {
      expect(selfNumbers).toContain(number);
    })
  })
});