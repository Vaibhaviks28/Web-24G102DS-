let pop = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('one');
        resolve()
    },2000)
}).then(function(){
    console.log('done');
    
})
        