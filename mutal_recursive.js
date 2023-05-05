function F(n) {
    if (n == 0) {
        return 1;
    } else {
        return n - M(F( n - 1 ));
    }   
}
  
function M(n) {
    if (n == 1) {
        return 0;
    } else {
        return n - F(M( n - 1 ));
    }
}

console.log(M(7));//, 5