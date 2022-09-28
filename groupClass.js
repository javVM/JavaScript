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
