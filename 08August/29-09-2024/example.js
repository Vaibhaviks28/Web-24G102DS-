function user(username,age,isLog){
    this.username=username;
    this.age=age;
    this.isLog=isLog;

    return this
}
let one =user('mine',22,true)
console.log(one);
