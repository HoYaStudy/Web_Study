const asyncModule = require("./async");

describe("Test Asynchronous Module", () => {
  it("tests callback", (done) => {
    asyncModule.asyncAdd(1, 2, (result) => {
      expect(result).toBe(3);
      done();
    });
  });

  it("tests promise (resolve)", (done) => {
    asyncModule.asyncSubtract(2, 1).then((result) => {
      expect(result).toBe(1);
      done();
    });
  });

  it("tests promise (reject)", (done) => {
    asyncModule
      .asyncSubtract(2, 0)
      .then((result) => {
        expect(result).toBe(2);
        done();
      })
      .catch((e) => {
        expect(e).toBeInstanceOf(Error);
        done();
      });
  });

  it("tests async/await", async () => {
    const result = await asyncModule.asyncMultiply(2, 3);
    expect(result).toBe(6);
  });
});
