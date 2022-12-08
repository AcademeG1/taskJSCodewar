// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function(prototype, properties) {
    if (prototype === undefined) throw new TypeError();
    let obj = new Object;
    obj.__proto__ = properties
    if (prototype !== undefined) {
        Object.defineProperties(obj, properties);
    }
    return obj;
  };