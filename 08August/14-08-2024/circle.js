let arr=[1,2,3,4,5]
function circle(r){
    let out=[]
    for(let a=0;a<r.length;a++){
        out.push(Math.PI*r[a]*r[a])
    }
    return out
}
console.log(circle(arr));