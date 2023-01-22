function minSum(arr) {
    return arr.sort((max, min) => max - min).reduce((acc, current) => acc + current * arr.pop(), 0);
}

console.log(minSum([5,4,2,3]));