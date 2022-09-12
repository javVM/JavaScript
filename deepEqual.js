const deepEqual = (elementA, elementB) => {
  
  if(typeof elementA !== "object" || typeof elementB !== "object")
    return elementA === elementB;
  else {
    
    propA= Object.keys(elementA);
  	propB = Object.keys(elementB);
    
    if(propA.length != propB.length) return false;
    else {
      
      let ret = true;
      
      for(let i = 0; i < propA.length ; i++) {
        ret = ret && deepEqual(elementA[propA[i]], elementB[propB[i]]);
      }
      
      return ret;
    }
  }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
