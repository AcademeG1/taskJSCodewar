Array.prototype.filter = function (func, context){
  let newArr = new Array();
  const orig = this.slice(0);
  for (let i=0; i<this.length; i++) {
    if (i in this){
      if (func.call(context, orig[i], i, orig)) {
        newArr.push(orig[i]);
      }
    }
  }
  return newArr;
  }
