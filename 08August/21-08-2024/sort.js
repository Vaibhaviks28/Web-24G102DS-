let a=[2,583,44,35,878,62]
a.sort()
console.log(a);

//-----------------------------------------------------------

let c=(a,b)=>{
    return b-a
}
let b=[33,1,44,567,9,3];            //desending order
b.sort(c);
console.log(b);

//-------------------------------------------------------

let d=[2,44,35,878,62]
d.sort((a,b)=>b-a)
console.log(d);

//--------------------------------------------------------

let e=[2,44,35,878,62]
e.sort((a,b)=>a-b)              //accending order
console.log(e);
