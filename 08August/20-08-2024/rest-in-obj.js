let a ={
    name:'vaibhavi',                //rest operator in object
    age:25
}
console.log({...a});
console.log({...a,name:'mike'});


let {...b} =a
console.log(b);

let c={
    ...a,
    age:20
}
console.log(c);

