// let numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]


Array.prototype.square = function() { return this.map(el => el * el)};
Array.prototype.cube = function() { return this.map(el => el * el * el)};
Array.prototype.sum = function() { return this.reduce((first, second) => first + second, 0) }
Array.prototype.average = function() { return this.sum() / this.length }
Array.prototype.even = function() { return this.filter(num => num%2===0) }
Array.prototype.odd = function() { return this.filter(num => num%2!==0) }


let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());  // must return [1, 4, 9, 16, 25]
console.log(numbers.average()); // must return 3
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]