let pop = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(error) {
            resolve({
                name:'mike',
                age:22
            })
        }
        else{
            reject('Something went wrong')
        }
    },1000)
}).then(function(user) {
    return user.name
})
.then(function(name) {
    console.log(name);
})
.catch(function(not) {
    console.log(not);
})