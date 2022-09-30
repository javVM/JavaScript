class PGroup {
  constructor() {
    this.elements = [];
  }
  
  add(elem) {
    let updated = [];
    updated.push(...this.elements);
    if (updated.indexOf(elem) === -1) updated.push(elem);
    
    let group = new PGroup();
    group.elements = updated;
    
    return group;
  }
  
  delete(elem) {
    let updated = [];
    updated.push(...this.elements);
    const pos = updated.indexOf(elem);
    if(pos > -1) updated.splice(pos,1);
    
    let group = new PGroup();
    group.elements =updated;
    
    return group;
  }
  
  has(elem) {
    return (this.elements.indexOf(elem) !== -1 ? true : false);
  }
  
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
