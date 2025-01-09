describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // Both strings are equal in JavaScript.
    expect(true).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // Concatenating "apple" and "pie" with a space.
    expect("apple pie").toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1)); // typeof a character in a string is "string"
    expect("string").toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // \u0041 is the Unicode escape sequence for "A", so the result is "Apple".
    expect("Apple").toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";
    // The length of "apple" is 5.
    expect(5).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // fruit.slice(0, 5) extracts the substring "apple".
    expect("apple").toBe(fruit.slice(0,5));
  });
});
