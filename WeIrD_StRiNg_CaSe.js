function toWeirdCase(string) {
    let stringMass = string.split(' ')
    let result = ''
    let resultMass = []
     stringMass.forEach(str => {
         result = ''
        for (let i = 0; i < str.length; i++){
            if (i % 2 === 0) {
                result += str[i].toUpperCase()
            } else {
                result += str[i].toLowerCase()
            }
        }
         resultMass.push(result)
    })
    return resultMass.join(' ')
}


console.log(toWeirdCase('This wfwe'))