const addOne = (a) => a + 1
const multTwo = (b) => b * 2

function compose(...args) {
    return function(n) {
        args.reverse().forEach((i) => n=i(n));
        return n;
    }
}

console.log(compose(multTwo, addOne)(5)) // 12