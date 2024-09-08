let a=['vai',20]
let [name,age] = a

console.log(a);
console.log(age);
console.log(name,age);

let c=["vai", ,"pune",["female",2000]]
let[fname,agee=24,location,[gen,sal]]=c
console.log(sal);
console.log(agee);

let d=["vai", 24,"pune",["female",2000]]
let [lname,...data]=d//rest operater in array destructing
console.log(data);




