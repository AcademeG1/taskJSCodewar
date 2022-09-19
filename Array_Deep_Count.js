function deepCount(a){
    return a.reduce((sum, el) => sum + (Array.isArray(el)?deepCount(el):0),a.length)
}

console.log(deepCount([1, 2, 3, [1, [2, 4]]]))