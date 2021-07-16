const { solution } = require("./2739-multiplication-table");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the multiplication table", () => {
  solution(2);
  [1,2,3,4,5,6,7,8,9].forEach((element) => {
    expect(consoleSpy).toBeCalledWith(`2 * ${element} = ${2 * element}`)
  })
});

