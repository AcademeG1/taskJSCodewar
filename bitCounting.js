function countBits(n) {
    let binaryNum = parseInt(n).toString(2);
    let count = 0;
    console.log(binaryNum)
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] === '1') {
            count++
        }
    }
    return count
}

console.log(countBits(7))