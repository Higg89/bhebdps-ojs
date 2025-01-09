describe("About Functions And Closure (about_functions_and_closure.js)", function() {
  it("defining functions directly", function() {
    let result = "a";
    function changeResult() {
      // the ability to access variables defined in the same scope as the function is known as 'closure'
      result = "b";
    };
    changeResult();
    // what is the value of result?
    expect("b").toBe(result);
  });

  it("assigning functions to variables", function() {
    let triple = function(input) {
      return input * 3;
    };
    // what is triple 4?
    expect(12).toBe(triple(4));
  });

  it("self invoking functions", function() {
    let publicValue = "shared";
  
    (function(pv) {
      let secretValue = "password";
      expect("shared").toBe(pv); // pv соответствует publicValue
      expect("string").toBe(typeof(secretValue)); // secretValue определён внутри функции
      expect("string").toBe(typeof(publicValue)); // publicValue доступен через замыкание
    })(publicValue);
  
    expect("undefined").toBe(typeof(secretValue)); // secretValue недоступен снаружи функции
    expect("string").toBe(typeof(publicValue)); // publicValue доступен снаружи
  });
  

  it("arguments array", function() {
    let add = function() {
      let total = 0;
      for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // Суммируем все аргументы
      }
      return total; // Возвращаем сумму
    };

    // add 1,2,3,4,5
    expect(15).toBe(add(1,2,3,4,5));
    // add 4,7,-2
    expect(9).toBe(add(4,7,-2));
  });

  it("using call to invoke function", function() {
    let invokee = function(message) {
      return this + message;  
    };
    
    // Using call to set "this" and pass a message
    let result = invokee.call("I am this!", "Where did it come from?");

    // "this" is "I am this!", message is "Where did it come from?"
    expect("I am this!Where did it come from?").toBe(result);
  });

  it("using apply to invoke function", function() {
    let invokee = function(message1, message2) {
      return this + message1 + message2;  
    };

    // Using apply to set "this" and pass arguments as an array
    let result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);

    // "this" is "I am this!", message1 is "I am arg1", message2 is "I am arg2"
    expect("I am this!I am arg1I am arg2").toBe(result);
  });
});
