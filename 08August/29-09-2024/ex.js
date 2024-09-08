function add(){
let one=()=>{
    // let a =1
    console.log(a);
    let two = ()=>{
        // let a=2
        console.log(a);
        let three=()=>{
            let a=3
            console.log(a);
        }
        three()
    }
    a=100
    two()
}
a=200
return one
}

let fun=add()
fun()