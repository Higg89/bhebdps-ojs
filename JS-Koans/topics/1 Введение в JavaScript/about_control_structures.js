describe("About Control Structures (about_control_structures.js)", function(){
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // The value of isPositive is true because the condition 2 > 0 is true.
    expect(true).toBe(isPositive);
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i;
    }

    // Counter starts at 10, and the loop adds 1, 2, and 3, resulting in 16.
    expect(16).toBe(counter);
  });

  it("for in", function() {
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    for (let property_name in person) {
        result = result + property_name;
    }

    // The property names of the object are "name" and "age", concatenated to "nameage".
    expect("nameage").toBe(result);
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
    // When true, the result is "apple".
    expect("apple").toBe(fruit);

    fruit = false ? "apple" : "orange";
    // When false, the result is "orange".
    expect("orange").toBe(fruit);
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1+1:
        result = 2;
        break;
    }

    // The switch matches case 1+1 (which equals 2), so result is set to 2.
    expect(2).toBe(result);
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
          break;
      default:
        result = "Merry";
        break;
    }

    // The default case is executed, setting result to "Merry".
    expect("Merry").toBe(result);
  });

  it("null coalescing", function() {
    let result = null || "a value";

    // When null is used with ||, the second value ("a value") is returned.
    expect("a value").toBe(result);
  });
});
