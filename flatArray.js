let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((a,b)=> a.concat(b));

console.log(flatArray);
// → [1, 2, 3, 4, 5, 6]
