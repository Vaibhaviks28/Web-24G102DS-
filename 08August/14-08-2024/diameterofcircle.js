let arr=[1,2,3,4,5]
function area(r){
    let out=[]
    for(let a=0;a<r.length;a++){
        out.push(2*r[a])
    }
    return out
}
console.log(area(arr));