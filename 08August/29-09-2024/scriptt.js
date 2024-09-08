function one(){
    let name='mine'
    function two(){
        console.log(name); 
    }
    name='op'
    return two
}    
let three = one()
three()