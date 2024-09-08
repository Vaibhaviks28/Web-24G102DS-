async function one(){
    try{
    let res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
    let done = await res.json()
    console.log(done);
    }catch(err){
        console.log(err);
    }
}
one()