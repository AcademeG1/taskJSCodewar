function Person (name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
  };
  
var guy = nouveau(Person, 'Guy');

function nouveau (Constructor, ...args) {
    const instance = Object.create(Constructor.prototype);
    const result = Constructor.apply(instance, args);
    return result === Object(result) ? result : instance;
}

