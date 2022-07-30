// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3


function strCount(obj){
let str = 0;
  for (let i in obj) {
    if (typeof obj[i] == 'object') {
      str += strCount(obj[i])
    }
    if (typeof obj[i] == 'string') {
      str++
    }
  }
  return str;
}
