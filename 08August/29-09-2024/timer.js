let a = function (){
    document.querySelector('h1').innerHTML = 'i am very good'
}
let b
document.querySelector('#start').addEventListener('click',function(){
    b = setTimeout(a,5000)
    alert('start')
})
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(b)
    alert('stop')
})