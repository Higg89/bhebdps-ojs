describe("About this (about_this.js)", function() {
  it("'this' inside a method", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name; // Используем this.name для доступа к свойству объекта
      }
    }

    // Если метод вызывается в контексте объекта, 'this' указывает на объект
    expect(person.intro()).toBe("Hello, my name is bob");
  });

  it("'this' on unattached function", function () {
    let person = {
      globalName: 'bob',
      intro: function () {
        return "Hello, my name is " + this.globalName; // Здесь this указывает на глобальный контекст
      }
    }

    let alias = person.intro;

    // Присваиваем глобальной переменной window.globalName значение 'Peter'
    window.globalName = 'Peter';

    // Если функция вызывается вне объекта, 'this' ссылается на глобальный объект (window)
    expect(alias()).toBe("Hello, my name is Peter");
  });

  it("'this' set explicitly", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

    // Используем метод call для явного задания контекста this
    let message = person.intro.call({name: "Frank"}); // Указываем объект с name: "Frank"

    // При использовании call 'this' указывает на переданный объект
    expect(message).toBe("Hello, my name is Frank");
  });
});
