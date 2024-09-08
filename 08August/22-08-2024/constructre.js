function Abc(){
    this.first="mike",
    this.last="op"
}
let one =  new Abc()
console.log(one);

//-----------------------------------------------

function Ddd(first,last){
    this.first=first,
    this.last=last
}
let two =  new Ddd("mike","op")
let three =  new Ddd("jhon","one")
two.age=22   //to add new propert in object by use of cnstructor
console.log(two);
console.log(two.first);
console.log(three);

//----------------------------------------------------------

function bcd(first,last){
    this.first=first,
    this.last=last
    this.add=function(){
        return this.first+" "+this.last
    }
}
let four=new bcd("mike","op")
console.log(four.add());


