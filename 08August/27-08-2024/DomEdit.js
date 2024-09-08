function add(lang){
    let one=document.createElement('li')
    // one.innerHTML = `${lang}`
    one.appendChild(document.createTextNode(lang))
    document.querySelector('.lang').appendChild(one)
}
add('HTML')

let three=document.querySelector('li:nth-child(1)')

let four= document.createElement('li')
four.textContent='CSS'
three.replaceWith(four)

let five=document.querySelector('li:last-child')
five.remove()

setInterval(function(){
    add('HTML');
},2000)