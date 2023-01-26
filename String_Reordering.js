function sentence(List) {
  let arr = [];
  let res = '';
  let min = 0;
   for (let key of List) {
     arr.push(+Object.keys(key))
   }
  for (let j of arr) {
    min = Math.min(...arr);
    res += Object.values(List[arr.indexOf(min)]) + ' ';
    arr.splice(arr.indexOf(min), 1, 999);  
  }
  return res.trim();
}
