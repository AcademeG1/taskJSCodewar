function getLengthOfMissingArray(arrayOfArrays) {
  let result = (arrayOfArrays || []).map(e=> e ? e.length : 0)
        .sort((a,b) => a - b)
    if(result.includes(0)){
        return 0;
    }
    for(let i = 0; i < result.length; i++){
        if(result[i+1] != result[i]+1){
            return result[i]+1;
        }
    }
    return 0
}
