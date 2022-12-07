

// Object.defineProperties() !! важное свойство

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }

Object.defineProperties(Person.prototype, {
    name: {
      get() {
        return this._name = this.firstName + ' ' + this.lastName;
      },
      set(name) {
        this._name = name;
        this.firstName = name.split(' ')[0]
        this.lastName = name.split(' ')[1]
      }
    }
  });

let marcusFenix = new Person('Marcus', 'Fenix');
console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
console.log(marcusFenix.getName()); // => 'Marcus Fenix'

let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'