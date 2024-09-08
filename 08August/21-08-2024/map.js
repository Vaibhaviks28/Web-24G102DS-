let map= new Map();
map.set("1","one")
map.set("2","two")
map.set("1","one")
map.set("3","three")

for(let value of map){
    console.log(value);                     //shows output in array
}

//-------------------------------------------------------------------

for(let [key,value] of map){
    console.log(key,'->',value);            //shows output without array 
}

//----------------------------------------------------------------

let arr=[1,2,3]
let ans =arr.map((num)=>{
    return num+1;                        //map on array 
})
console.log(ans);