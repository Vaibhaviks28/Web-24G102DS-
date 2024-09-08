let one=new Date()
console.log(one);//shows in milisec
console.log(one.toString()); //convert in understandable date and time
console.log(typeof(one));  //datatype of date and time is object
console.log(one.toLocaleString()); //shows in am,pm

console.log(one.toLocaleDateString()); //shows date
console.log(one.toLocaleTimeString()); //shows time
console.log(one.toDateString());  //shows ellaborated date
console.log(one.toTimeString()); //shows ellaborated time

console.log(one.toISOString());//in Indian standard 

let two=new Date(2000,4,28)
console.log(two.toDateString());//shows given date and day

let three=new Date(2000,4,28,3,5)
console.log(three.toLocaleString());//shows given date and time

let four=new Date('01-14-2024')
console.log(four);
console.log(four.toLocaleString());

let five=Date.now() //to check timestamp
console.log(five);


console.log(Math.floor(Date.now()/100000000)); //shows timestamp in seconds

let six=new Date 
console.log(six);
console.log(six.getMonth()); //shows current month {always starts with 0}
console.log(six.getDay()); //shows current day {always starts with 0}


let a=six.getDay()
let b=six.getMonth()
console.log(`Current day is ${a} and current month is ${b}`);

console.log(`Current day is ${six.getDay()} and current month is ${six.getMonth()}`);




