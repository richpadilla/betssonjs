var strings = require("./strings");

describe("strings", () => {
  it("should exist", () => {
    expect(strings.checkPalindrome).toBeDefined();
  });

  it("should throw an error if the parameter is not a string", () => {
    expect(() => strings.checkPalindrome(1)).toThrowError();
  });

  it("should confirm that a string is a palindrome", () => {
    expect(strings.checkPalindrome("eve")).toBeTruthy();
  });

  it("should confirm that a string is a palindrome", () => {
    expect(strings.checkPalindrome("hannah")).toBeTruthy();
  });

  it("should confirm that a string is a palindrome", () => {
    expect(strings.checkPalindrome("han4ah")).toBeFalsy();
  });

  it("should confirm that a string is a palindrome", () => {
    expect(strings.checkPalindrome("hannah is the ostrich")).toBeFalsy();
  });

  it("should confirm that a string is a palindrome", () => {
    expect(strings.checkPalindrome("hannah i hannah")).toBeTruthy();
  });

  describe("convertToArray", () => {
    it("should convert string to array", () => {
      expect(strings.convertToArray("anna")).toMatchObject([
        "a",
        "n",
        "n",
        "a"
      ]);
    });
  });
});
