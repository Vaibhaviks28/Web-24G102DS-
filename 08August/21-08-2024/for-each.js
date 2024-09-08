//for each does'nt return anything

let a=[1,2,3]
a.forEach((val)=>{
    console.log(val);
    
})

//------------------------------------------

let b=[1,2,3]                               
function add(num){                      //for each method with function reference add on b array
    console.log(num+1);
}
b.forEach(add)

//---------------------------------------------------
let c=[
    {
    name:'one',
    age:1
},
{
    name:'two',
    age:2
},
{
    name:'three',
    age:3
}
]
c.forEach((val)=>{                          //for Each method on database
    // console.log(val);                    //to print key and value
    // console.log(val.name);               //to print only name
    console.log(val.age);                   //to print only age
    
})

//-------------------------------------------------------------

