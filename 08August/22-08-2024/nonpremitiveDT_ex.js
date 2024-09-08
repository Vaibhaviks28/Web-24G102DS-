//non-premitive datatypes are mutable

let x =[1,2,3]
let y =x
// let y =x.concat()             //to make immutable by using concat method
// let y ={...x}            //to make immutable by using spread operator
y.pop()
console.log(x);

