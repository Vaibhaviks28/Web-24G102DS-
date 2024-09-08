//function hoisting

console.log(one(1));
function one(num){
    return num
}

console.log(two(2));
function two(num){
    return num
}

//------------------------------------

//variable hoisting

// let a;
let a=7;
function three(){
    // a=7;
    console.log(a)
}
three()

//--------------------------