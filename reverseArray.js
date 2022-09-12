const reverseArray = (arr) => {
   let ret = []

   while (arr.length > 0) {
     
     ret.unshift(arr[0]);
     arr.shift();
   }
   return ret;
}

const reverseArrayInPlace = (arr) => {
  let aux;
  let count = arr.length/2;
  let i = 0;
  let l = arr.length-1;
  
  while(i < count) {
    
    aux = arr[i];
    arr[i] = arr[l - i];
    arr[l-i] = aux;
    
    i++;
  } 
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
