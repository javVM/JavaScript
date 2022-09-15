//Version looping
function every(array, test) {
  // Your code here.
  for (let elem of array) {
    if(!test(elem)) return false;
  }    
  return true;
}

//Version using some
const everyv2 = (array,test) => {
  return !array.some((elem) => !test(elem));
}
console.log("every",every([1, 3, 5], n => n < 10), "| everyv2", everyv2([1, 3, 5], n => n < 10));
// → true
console.log("every",every([2, 4, 16], n => n < 10),"| everyv2", everyv2([2, 4, 16], n => n < 10));
// → false
console.log("every",every([], n => n < 10), "| everyv2", everyv2([], n => n < 10));
// → true
