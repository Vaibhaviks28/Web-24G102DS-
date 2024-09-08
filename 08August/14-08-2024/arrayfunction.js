let arr=[1,2,3,4,5]
function value(abc) {
    // return abc
    return abc[3]

}
console.log(value(arr));
console.log(value([11,22,33,44,55]));

//---------------------

let ar=[1,2,3,4,5]
console.log(...ar);

//---------------------

let arry=[1,2,3,4,5]
let abc=[...arry]
console.log(abc);

//.........................

let arr1=[1,2,3,4,5]
let arr2=[11,22,33,44,55]
let abcd=[...arr1,...arr2]
console.log(abcd);

//----------------------------

let ar1=[1,2,3,4,5]
function sum(a,b,c,d,e){
    console.log(a+b+c+d+e);
}
sum(...ar1)

//----------------------

