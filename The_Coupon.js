function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var current_date = Date.parse(currentDate);
  var expiration_date = Date.parse(expirationDate);
  if( (enteredCode === correctCode) && (expiration_date >= current_date) ){
    return true;
    }
    else {
      return false;
    }
}
