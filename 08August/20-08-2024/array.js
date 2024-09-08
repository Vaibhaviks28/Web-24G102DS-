let a= [1,2,3,4,5]

a.push(6)  //add given value to the end of array
console.log(a);

a.pop()  //removes last value from array
console.log(a);

a.unshift(0)  // add given value to starting of array
console.log(a);

a.shift()  //removes starting value from array
console.log(a);

let b=a.join() //convert it into string.
console.log(b)

console.log(typeof(a));
console.log(typeof(b));

let c=a.slice(0,2)  //only show which we have slice from array
console.log(c);

// let d=a.splice(0,2)  //splice break array which we splice
//let d=a.splice(2,0,"mine")  //add mine in index 2 and doest remove any value
let d=a.splice(2,2,"mine")  //add mine in index 2 and remove any 2 value after that
console.log(d);
console.log(a);







