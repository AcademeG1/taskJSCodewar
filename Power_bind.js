Function.prototype.bind = function(ctx){
  var func = this;
  return function(...args){
    return func.call(this == global ? ctx : this, ...args);
  };
};
