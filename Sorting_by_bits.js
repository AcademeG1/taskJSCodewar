function sortByBit(arr) {
  
  function numberOfBits(num){
    let bits=num.toString(2);
    let arrBits = bits.split('');
    let numOfOnes=0;
    for (let i=0; i<arrBits.length;i++){
      if(arrBits[i] == '1'){
        numOfOnes++;
      }
    } return numOfOnes;
  }
  return arr.sort((a,b)=> {if(numberOfBits(a)==numberOfBits(b)){return a-b} else {return numberOfBits(a)-numberOfBits(b)}})
}
