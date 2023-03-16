function calculate() {
  var first = 0; 
  for(var i = 0 ; i < arguments.length; i+=1) {
    first += arguments[i];
  }
  return function() {
  var second = 0;
  for(var j = 0 ; j < arguments.length; j +=1) {
    second += arguments[j];
  }
  return first+second;
  }
}
