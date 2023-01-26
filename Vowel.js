function vowelOne(s){
  s = s.toLowerCase()
  const arr = ['a', 'e', 'i', 'o', 'u']
  let result = ''
  for (el of s) {
    arr.includes(el) ? result += '1' : result += '0'
  }
  return result
}
