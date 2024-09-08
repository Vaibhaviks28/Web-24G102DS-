let a="Vaibhavi"
console.log(`My name is ${a}`);  //string inject

let one=new String("ABC")
console.log(one);
console.log(one[1]);
console.log(one.length);  //shows length of string
console.log(one.toLowerCase());
console.log(one.toUpperCase());
console.log(one.charAt(2)); //shows charachter stored in that index
console.log(one.indexOf('B'));

let two= "   ABC   "
console.log(two.length);
console.log(two.trim().length); //trim will reduce spaces from both sides

let three="https://github.com/class"
console.log(three);
console.log(three.replace('h','A')); //it will replace only 1st same letter
console.log(three.replace('h','new')); 
console.log(three.replace('https','new')); 
console.log(three.replace('https','n')); 

console.log(three.includes('com')); //checks that given string is present in main string or not
console.log(three.includes('comggj')); 

let four="M-I,N,E"
let five=" This is my class "
console.log(four.split(','));  //seprate strings by given symobol
console.log(four.split('-'));
console.log(five.split(' '));



