let one={
    name:'john',
    age:25
}
let two={
    fname:'mike',
    fage:20
}
let three=Object.assign({},one,two)  //for object joining with assign keys should be not same 
let four={...one,...two}  //by using rest operator,mostly we use this method for joining 2 object
console.log(three);
console.log(four);
