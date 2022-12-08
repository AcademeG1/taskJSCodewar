// return the nested property value if it exists,
// otherwise return undefined
var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };

Object.prototype.hash = function(string) {
  let object = this
  string.split('.').forEach((element) => {
    try {
        object = object[element]
    } catch {
        object = undefined;
    }
  });
  return object;
}

console.log(obj.hash('person.name'));