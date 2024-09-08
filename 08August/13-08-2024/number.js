let one=400
let two=new Number(400)
console.log(one);
console.log(two);
console.log(two.length); //it will show undefined if we use length funtion on number
console.log(two.toString().length); //it will covert number into string and then shows length
console.log(two.toFixed(2)); //shows to decimal value

let three=22.89345
console.log(three.toFixed(2));
console.log(three.toFixed(6));

console.log(three.toPrecision(2));
console.log(three.toPrecision(4)); 

let four= 223.89
let five= four.toPrecision(3)
console.log(four);
console.log(typeof(four));
console.log(typeof(five));

let six= 1010101010101010
console.log(six.toLocaleString('en-IN'));
console.log(six.toLocaleString('en-US'));



