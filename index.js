function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return (value) => value * multiplierValue;
}
 var doubler = createMultiplier(2);
 var tripler = createMultiplier()

 function multiplier(){

 }

 var doublerWithBind;

 var triplerWithBind;
