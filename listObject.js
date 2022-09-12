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

const listToArray = (list) => {
  
	let ret = [];
  	let item = list;
  
  	while (item.rest !== null) {
    	ret.push(item.value);
      	item = item.rest;
    }
  
	return ret;
}

const prepend = (value, list) => {
  
  return { value, rest: list };
}

const nth = (list, pos) => {
  
  if (pos === 0) return list.value;
  else {
    return nth(list.rest, pos-1);
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
