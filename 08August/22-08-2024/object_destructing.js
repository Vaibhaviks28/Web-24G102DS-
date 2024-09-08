let one={
    fname:'john',
    age:30,
    city:'ney york'
}
let {fname}=one
console.log(fname);

//-------------------------------------------------------------

let two={
    lname:'john',
    age:30,
    city:'new york'
}
let {lname:na,city,age,email="abc@gmail.com"}=two
console.log(na);           //customize name -lname:na
console.log(age);
console.log(city);
console.log(email);

//----------------------------------------------------------------------