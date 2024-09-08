//chaining means apply multiple methods on single array

let a=[2,5,6,4]
let b=a.map((val)=>val*2).filter((abc)=>abc>5); 
// let b=a.filter((val)=>val*2).map((abc)=>abc>5);      //shows true false
console.log(b);

//------------------------------------------------------------------------------------

let shop=[
    {
        item:"one",
        price:20000
    },
    {
        item:"two",
        price:2300
    },
    {
        item:"three",
        price:67
    }
]
let bill=shop.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(bill);

