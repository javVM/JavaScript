/*
List object has the following structure
_________
| value |    _________
| rest	---> | value |
|_______|    | rest  ---> null
  	     |_______|

*/

//Convert array into List
const arrayToList = (arr) => {
  
  if(arr.length == 1) {
     return { value : arr[0], rest : null };
  }
  else {
     let val = arr[0];
     arr.shift();
     return { value : val, rest : arrayToList(arr) }
  }
}

//Convert list values into array 
const listToArray = (list) => {
  
  let ret = [];
  let item = list;
  
  while (item.rest !== null) {
     ret.push(item.value);
     item = item.rest;
  }
  
  return ret;
}

//Create new list with new first item
const prepend = (value, list) => {
  
  return { value, rest: list };
}

//Get value of the nth element of the list
const nth = (list, n) => {
  
  if (pos === 0) return list.value;
  else {
    return nth(list.rest, n-1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
