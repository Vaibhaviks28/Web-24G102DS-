//array destructing in function

function abc([name,age]){
    console.log(name);
    console.log(age);  
}
abc(["abc",20])


function bcd(){
    return["abc",20] 
}
let [name,age]=bcd()
console.log(age);



