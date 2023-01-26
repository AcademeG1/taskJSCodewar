function colourAssociation(array){
  var res = [];
  array.forEach(i => res.push({[i[0]]: i[1]}));
  return res;
}
