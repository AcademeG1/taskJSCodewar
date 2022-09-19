function explode(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let number = Number(s[i])
        for (let j = 0; j < number; j++) {
            result += number.toString()
        }
    }
    return result
}

console.log(explode("312"))