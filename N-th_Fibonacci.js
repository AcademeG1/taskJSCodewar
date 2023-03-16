function nthFibo(n) {
  let a = 0, b = 1;
  
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return n == 1? a: b;
}
