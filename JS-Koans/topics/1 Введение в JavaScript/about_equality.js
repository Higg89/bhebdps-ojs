describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + 4).toBe(7); // 3 + 4 = 7
  });

  it("string equality", function() {
    // Concatenate "3" and "7" to get "37".
    expect("3" + "7").toBe("37");
  });

  it("equality without type coercion", function() {
    // Exact match for 3 (both value and type).
    expect(3 === 3).toBeTruthy();
  });

  it("equality with type coercion", function() {
    // String "3" is coerced to number 3, so the equality holds.
    expect(3 == "3").toBeTruthy();
  });

  it("string literals", function() {
    // Both double and single quotes can be used for the same string.
    expect("frankenstein" === "frankenstein").toBeTruthy();
    expect('frankenstein' === 'frankenstein').toBeTruthy();
  });
});
