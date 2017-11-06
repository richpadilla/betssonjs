var Multiplier = require("./multiplier");

describe("multiplier", () => {
  it("should exist", () => {
    expect(Multiplier).toBeDefined();
  });

  it("when given 3, 5 should return 15", () => {
    expect(Multiplier.multiply(3, 5)).toBe(15);
  });

  it("when given 5, 3 should return 15", () => {
    expect(Multiplier.multiply(3, 5)).toBe(15);
  });

  it("when given 4, 4 should return 16", () => {
    expect(Multiplier.multiply(4, 4)).toBe(16);
  });

  it("when you multiply number with undefined it should throw an error", () => {
    expect(Multiplier.multiply(4)).toBeNull();
  });

  it("when you multiply letters it should throw an error", () => {
    expect(Multiplier.multiply("a", "0xb")).toBeNull();
  });

  it("should throw and error if object passed", () => {
    expect(Number.isNaN(Multiplier.multiply({ st: 1 }, 1))).toBeTruthy();
    expect(
      Number.isNaN(Multiplier.multiply({ st: 1 }, { st: 2 }))
    ).toBeTruthy();
    expect(Number.isNaN(Multiplier.multiply(2, { st: 2 }))).toBeTruthy();
  });

  it("should throw and error if array passed", () => {
    expect(Number.isNaN(Multiplier.multiply([666], 1))).toBeTruthy();
    expect(Number.isNaN(Multiplier.multiply([666], [{ key: 1 }]))).toBeTruthy();
    expect(Number.isNaN(Multiplier.multiply(1, [666]))).toBeTruthy();
  });
});

describe("multiplyElements", () => {
  it("should exist", () => {
    expect(Multiplier.multiplyElements).toBeDefined();
  });

  it("should return 6 for array of [1, 2, 3]", () => {
    expect(Multiplier.multiplyElements([3, 2, 1])).toBe(6);
  });
});

function f(a) {
  if (a === 1) {
    throw new Error();
  }
}

describe("error test", () => {
  it("should throw an error", () => {
    expect(() => f(1)).toThrow(Error);
  });
});
