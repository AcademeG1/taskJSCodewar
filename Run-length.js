var runLengthEncoding = function(str){
  var encoded = [], lastIndex = 0, l;
    
  for( l in str ) {
    if( encoded[lastIndex] && encoded[lastIndex][1] === str[l] ) {
      encoded[lastIndex][0]++;
    } else { 
      lastIndex = encoded.push([1, str[l]]) - 1;
    }
  }
  
  return encoded;
}
