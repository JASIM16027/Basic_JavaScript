// A “symbol” represents a unique identifier.
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1.toString()===id1)
console.log(id1==id2);
