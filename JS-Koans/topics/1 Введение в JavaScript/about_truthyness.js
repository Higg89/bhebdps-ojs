describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // Positive numbers (including 1) are truthy.
    expect(true).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // Negative numbers (including -1) are also truthy.
    expect(true).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // Zero is falsy in JavaScript.
    expect(false).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // Null is also falsy in JavaScript.
    expect(false).toBe(nullIsTruthy);
  });
});
