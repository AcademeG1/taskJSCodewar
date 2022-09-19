const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function head(arr) {
    return arr[0]
}
function tail(arr) {
    let result = []
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
}

function init(arr) {
    let result = []
    for (let i = 0; i < arr.length-1; i++) {
        result.push(arr[i])
    }
    return result
}

function last(arr) {
    return arr[arr.length-1]
}
console.log(init(array))
// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |
//
// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x