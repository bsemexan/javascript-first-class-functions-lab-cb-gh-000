function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return (value) => value * multiplierValue;
}
 var doubler = createMultiplier(2);
 var tripler = createMultiplier(3)

 function multiplier(){

 }

 var doublerWithBind = multiplier()

 var triplerWithBind = multiplier()
