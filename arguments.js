function sumArguments(){
  let sumSoFar = 0;
  for (var i = 0; i < arguments.length; i++) {
    sumSoFar += arguments[i];
  }
  return sumSoFar;
}

function sumRest(...numbers) {
  let sumSoFar = 0;
  numbers.forEach( (el) => {
    sumSoFar += el;
  });
  return sumSoFar;
}

console.log(sumRest(1,2,3,4,5));
