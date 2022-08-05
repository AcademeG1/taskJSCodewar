
// на скорость
// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }

function isPrime(num) {
    if (num < 2) {return false}
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(3))