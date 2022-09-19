function isIsogram(str){
    let stroka = ''
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (!stroka.includes(str[i])) {
            stroka += str[i]
        } else {
            return false
        }
    }
    if (stroka === str) {
        return true
    }
}

console.log(isIsogram("apa"))