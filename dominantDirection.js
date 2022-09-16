/*
  countBy and characterScript are helper functions
*/

function dominantDirection(text) {

  const directions = countBy(text, char => { 
    let script = characterScript(char.codePointAt(0));
    return (script ? script.direction : "none")
  }).filter((direction) => direction.name != "none");
  
  return directions.reduce((max, current) => { 
    return (max.count > current.count ? max : current);
  }).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
