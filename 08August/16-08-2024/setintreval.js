// setInterval(function(){
//     console.log("mine");
// },3000)


//----------------------------------------------

// let a= ()=>{
//     console.log('hello'); 
// }
// setInterval(function(){
//     a()
// },3000)


//------------------------------------------------------


// let b = setInterval(function(){
//     console.log('hello'); 
// },3000)
// clearInterval(b)

//-----------------------------------------------

let a= setInterval(function() {
    let b= prompt("do u want to run setInterval  yes:no")
    if(b!=='yes'){
        clearInterval(a)
    }
    else{
        console.log('mine');
    }
    
}, 2000)
