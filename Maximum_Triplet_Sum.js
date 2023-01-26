function maxTriSum(numbers){
  numbers.sort((a, b) => b - a)
  let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
  return arr[0] + arr[1] + arr[2]
}
