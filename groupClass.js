class Group {
  constructor() {
    this.elements = [];
  }
  
  add(elem) {
    if (this.elements.indexOf(elem) === -1) this.elements.push(elem);
  }
  
  delete(elem) {
    const pos = this.elements.indexOf(elem);
    
    if(pos > -1) this.elements.splice(pos,1);
  }
  
  has(elem) {
    return (this.elements.indexOf(elem) !== -1 ? true : false);
  }
  
  static from(obj) {
    
    let group = new Group();
    for (let elem of obj) {
      group.add(elem);
    }
    return group;
  }
}

class groupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }
  
  next() {
    if(this.index === this.group.elements.length) return { done : true };
    
    let value = this.group.elements[this.index];
    this.index++;
    
    return { value, done : false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new groupIterator(this);
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(30);
console.log(group.has(30));
// → true
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of group) {
  console.log(value);
}
// → 20
// → 30
