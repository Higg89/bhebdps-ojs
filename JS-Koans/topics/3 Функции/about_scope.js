describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // Глобальная переменная thisIsAGlobalVariable доступна в этой области видимости
    expect(77).toBe(thisIsAGlobalVariable);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // Самовызывающаяся функция
    (function() {
      let innerVariable = "inner";
      // outerVariable доступна из внешней области видимости
      expect("outer").toBe(outerVariable);
      // innerVariable определена только в этой функции
      expect("inner").toBe(innerVariable);
    })();

    // outerVariable доступна в текущей области видимости
    expect("outer").toBe(outerVariable);
    // innerVariable недоступна за пределами функции
    expect("undefined").toBe(typeof(innerVariable));
  });
});
