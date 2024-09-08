let global =10
function abc(){
    let local=20
    console.log(local);
    console.log(global);
}
console.log(global);
abc()
// console.log(local);