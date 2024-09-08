//array in arry shows in 1 array

let a= [1,2,3,[11,22,33,44,[111,222,333,444,[101,102,103,104,[121]],555,666],55,66,77],4,[100,200],5,6,7]
let b=a.flat(4)
let c=a.flat(Infinity)
console.log(b);
console.log(c);
