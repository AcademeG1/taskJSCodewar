function find(object, path) {
  let arrPath = path.split('.')
  
  for(let item of arrPath) {
    if(object.hasOwnProperty(item)) {
      object = object[item]
    } else {
      object = undefined
      break
    }
  }

  return object
}
