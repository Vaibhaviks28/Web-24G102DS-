// setTimeout(function(){
//     console.log("mine");
// },3000)

//----------------------------------------

// let a= setTimeout(function() {
//     console.log('mine');
// }, 2000)
// let b= prompt("do u want to run settimeout  yes:no")
// if(b!=='yes'){
//     clearTimeout(a)
// }

//---------------------------------------------------

let a= setTimeout(function() {
    let b= prompt("do u want to run setTimeout  yes:no")
    if(b!=='yes'){
        clearTimeout(a)
    }
    else{
        console.log('mine');
    }
    
}, 2000)