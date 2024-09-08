function one(num1,num2){  //function keyword with function name
 console.log(num1+num2);
//  return num1+num2
}
one(4,5)  //function call
one(4,"5")
one(4,"a")
one(4,null)

// console.log(one(4,5));

//-------------------------------------

function two(user){
    console.log(`my name is ${user}`);  
}
two('vaibhavi')

//-------------------------------------

function three(user='mike'){
    if(user===undefined){
        console.log('plz enter ur name');
        return
    }
    return `${user} is very good person`;  
}
console.log(three('vaibhavi'));
// console.log(three());

//-------------------------------------

function four(num1){
    return num1
}
console.log(four(200,300,400,4000));  

//----------------------------------

function five(...num1){  
    return num1
}
console.log(five(200,300,400,4000));  

//----------------------------

function six(a,b,...num1){  
    return num1
}
console.log(six(200,300,400,4000,500,6000)); 

//----------------------------

let user={
    name: 'vaibhavi',
    age:24
}
function data(obj){
    console.log(`person name is ${obj.name} and age is ${obj.age}`);
}
data(user);

//----------------------------------

let users={
    name: 'vaibhavi',
    ages:24
}
function datas(obj){
    console.log(`person name is ${obj.name} and age is ${obj.age}`);
}
datas(users);

//-----------------------------------------------

function data2(obj){
    console.log(`person name is ${obj.name} and age is ${obj.age}`);
}
data2({ name: 'vaibhavi',
    age:24
});

//------------------------------


