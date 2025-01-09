describe("About Objects (about_objects.js)", function() {
  it("object type", function() {
    let emptyObject = {};
    // The type of an object is "object".
    expect("object").toBe(typeof(emptyObject));
  });

  it("object literal notation", function() {
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    // The person's name is "Amory Blaine".
    expect("Amory Blaine").toBe(person.name);
    // The person's age is 102.
    expect(102).toBe(person.age);
  });

  it("dynamically adding properties", function() {
    let person = {};
    person.name = "Amory Blaine";
    person.age = 102;
    // The dynamically added properties should match the expected values.
    expect("Amory Blaine").toBe(person.name);
    expect(102).toBe(person.age);
  });

  it("adding properties from strings", function() {
    let person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;
    // The properties added using string keys should match the expected values.
    expect("Amory Blaine").toBe(person.name);
    expect(102).toBe(person.age);
  });

  it("adding functions", function() {
    let person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() {
        return `I ${this.name} am ${this.age} years old.`; // Use 'this' to refer to the object.
      }
    };
    // The toString function should return the expected string.
    expect("I Amory Blaine am 102 years old.").toBe(person.toString());
  });

  it("property enumeration", function() {
    let keys = [];
    let values = [];
    let person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(let propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    // The property names and values should match the expected arrays.
    expect(keys).toEqual(["name", "age", "unemployed"]);
    expect(values).toEqual(["Amory Blaine", 102, true]);
  });
});
