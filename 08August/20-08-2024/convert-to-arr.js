//given values to convert in array but not convert object in array 

console.log(Array.from("a"));
console.log(Array.from({name:"abc",age:20}));  //gives empty array


let a={
    name:"abc",
    age:22
}
console.log(Object.entries(a));
console.log(Object.keys(a));
console.log(Object.values(a));

let b=10
let c=20
let d=30
console.log(Array.of(b,c,d));

