describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }
    // Сумма чисел от 0 до 5: 0 + 1 + 2 + 3 + 4 + 5 = 15
    expect(15).toBe(result);
  });

  it("assignment addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      result += i;
    }
    // Результат такой же, как и в предыдущем тесте: 15
    expect(15).toBe(result);
  });

  it("subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    // Результат: 5 - 0 - 1 - 2 = 2
    expect(2).toBe(result);
  });

  it("assignment subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    // Результат такой же, как и в предыдущем тесте: 2
    expect(2).toBe(result);
  });

  it("modulus", function() {
    let result = 10;
    let x = 5;
    result %= x;
    // Остаток от деления 10 на 5 равен 0
    expect(0).toBe(result);
  });

  it("typeof", function() {
    // typeof {} возвращает "object"
    expect("object").toBe(typeof({}));
    // typeof 'apple' возвращает "string"
    expect("string").toBe(typeof('apple'));
    // typeof -5 возвращает "number"
    expect("number").toBe(typeof(-5));
    // typeof false возвращает "boolean"
    expect("boolean").toBe(typeof(false));
  });
});
