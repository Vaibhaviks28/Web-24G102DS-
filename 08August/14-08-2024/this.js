let user={
    name:'john',
    age:30,
    one:function(){
        console.log(`${this.name} is my friend`)
    }
}
user.one();

//----------------------

let user1={
    name:'john',
    age:30,
    two:function(){
        console.log(`${this.name} is my friend`)
    }
}
user1.two();
user1.name='mike';
user1.two();

//---------------------------

function one(){
    let name='mike'
    console.log(`${this.name} is my friend`);  //this keyword doest work with function only with object
}
one()