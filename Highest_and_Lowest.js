function highAndLow(numbers) {
    let arr = numbers.split(' ')
    let numberArr = []
    arr.forEach(el => numberArr.push(Number(el)))

    numberArr.sort( (a, b) => {
        return a - b
    })
    console.log(numberArr)
    return `${numberArr[numberArr.length-1]} ${numberArr[0]}`
}


console.log(highAndLow('-1 -4 -5 -9 0 0 3 4 4 42 7 8'))