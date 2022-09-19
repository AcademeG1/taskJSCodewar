function disemvowel(str) {
    let result = ''
    const vowels = 'AEIOUaeiou'
    for (let i = 0; i < str.length; i++) {

        if (!vowels.includes(str[i])){
            result += str[i]
        }
    }
    return result
}

console.log(disemvowel("This website is for losers LOL!") )