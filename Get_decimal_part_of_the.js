function getDecimal(n){
  let arr = String(n).split('.');
  arr.shift();
  arr.unshift(0);
  return +arr.join('.');
}
