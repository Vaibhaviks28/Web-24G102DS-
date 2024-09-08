let arr=[1,2,3,4,5]
let area = function(r){
        return (Math.PI*r*r)
    }

let  circum = function (r){
        return (2*Math.PI*r)
    }

function dia(r){
        return (2*r)
    }

let cal = (r,log) =>{
    let out= []
    for(let a =0;a<r.length;a++){
        out.push(log(r[a]))
    }
    return out;
}

console.log(cal(arr,area));
console.log(cal(arr,circum));
console.log(cal(arr,dia));

