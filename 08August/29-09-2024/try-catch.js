let pop = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({
                name:'mike',
                age:22
            })
        }
        else{
            reject('Something went wrong')
        }
    },1000)
})
async function one(){
    try{
    let res = await pop
    console.log(res);
    }catch(err){
        console.log(err);
    }
}
one()