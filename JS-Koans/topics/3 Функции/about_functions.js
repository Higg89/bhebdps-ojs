describe("About Functions (about_functions.js)", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    // 1 + 2 = 3
    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () {
    let message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      let message = "Inner";
      return message;
    }

    // Внешнее значение message = "Outer"
    expect(getMessage()).toBe("Outer");
    // Локальная переменная message внутри функции = "Inner"
    expect(overrideMessage()).toBe("Inner");
    // Внешнее значение message не изменено = "Outer"
    expect(message).toBe("Outer");
  });

  it("should have lexical scoping", function () {
    let variable = "top-level";
    function parentfunction() {
      let variable = "local";
      function childfunction() {
        return variable; // Возвращает локальную переменную из parentfunction
      }
      return childfunction();
    }
    // Лексическое окружение возвращает "local"
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue){
      let newFunction = function doMysteriousThing(param){
        return makerValue + param;
      };
      return newFunction;
    }

    let mysteryFunction3 = makeMysteryFunction(3);
    let mysteryFunction5 = makeMysteryFunction(5);

    // mysteryFunction3(10) = 3 + 10 = 13
    // mysteryFunction5(5) = 5 + 5 = 10
    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg; // Возвращает только первый аргумент
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg; // Возвращает второй аргумент
    }

    // Если передан только один аргумент, второй будет undefined
    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]); // Собирает все аргументы в массив
      }
      return argsArray.join(","); // Соединяет их в строку через запятую
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {

    let appendRules = function (name) {
      return name + " rules!";
    };

    let appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    let praiseSinger = { givePraise: appendRules };
    // praiseSinger.givePraise = appendRules
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    // praiseSinger.givePraise = appendDoubleRules
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
