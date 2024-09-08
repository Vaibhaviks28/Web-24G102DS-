let a=[1,2,3,4]
let b=[11,22,33,44]
a.push(b)   //to add another array in existing array at the last with the use of push method
console.log(a);
console.log(a[4][2]);

let d=[1,2,3,4]
let e=[11,22,33,44]
let f= d.concat(e)  //to add array in one array
console.log(f);

let g=[...d,...e]  //using spread operator
console.log(d);
console.log(e);
console.log(g);





