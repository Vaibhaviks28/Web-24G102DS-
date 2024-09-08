let pop = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            name:'mike',
            age:22
        })
    },2000)
}).then(function(user){
    console.log(user);
    
})
        