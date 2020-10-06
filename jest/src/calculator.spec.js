const calc = require("./calculator");

describe("Test Calculator Module", () => {
  // beforeEach(() => console.log("Before Test"));

  // afterEach(() => console.log("After Test"));

  it("adds 1 and 2 to equal 3", () => {
    expect(calc.add(1, 2)).toEqual(3);
  });

  it("subtracts 2 and 1 to equal 1", () => {
    expect(calc.subtract(2, 1)).toEqual(1);
  });

  it("multiplies 2 and 3 to equal 6", () => {
    expect(calc.multiply(2, 3)).toEqual(6);
  });

  it("divides 4 and 2 to equal 2", () => {
    expect(calc.divide(4, 2)).toEqual(2);
  });
});
