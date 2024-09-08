let a=[2,3,4,4]
let b=a.filter((val)=>
{
    // if(val>3){               //by using if condition
    //     return val
    // }

    return val>3                //by using only return
})
console.log(b);

//--------------------------------------------------------

let c=[2,3,4,4]
let d=c.filter((val)=>val>3)                //implicit return
console.log(b);
