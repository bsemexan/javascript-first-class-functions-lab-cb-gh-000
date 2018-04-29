function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  (value) => value * multiplierValue;
}
 var doubler = createMultiplier(2);
 var tripler = createMultiplier()

 function multiplier(){

 }

 var doublerWithBind;

 var triplerWithBind;
