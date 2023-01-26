function dataReverse(data) {
  let a = [];
  while (data.length)
    a.unshift(...data.splice(0, 8));
  return a;
}
