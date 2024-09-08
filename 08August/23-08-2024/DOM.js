// let a=document.querySelector('#two >h2:nth-child(odd)')
let a=document.querySelectorAll('#two >h2:nth-child(odd)')
console.log(a);     //ans is in node list

a.forEach((one)=>{one.style.color='red'})

let b=Array.from(a)   //convert node list into array
console.log(b);         //ans is in array

let c=document.getElementById('two')
console.log(c);

let d=document.getElementsByClassName('item')
console.log(d);         //get HTML collection

let e=Array.from(d)
console.log(e);

let f=document.querySelector('h2').innerText
console.log(f);

let g=document.querySelector('h2:nth-child(3)').innerText
console.log(g);

let h=document.querySelector('#two').innerText
console.log(h);

let i=document.querySelector('#two')
console.log(i.children[3].innerText);
console.log(i.children[3].style.backgroundColor='blue');

for (val=0;val<3;val++) {
    console.log(i.children[val].innerText);
}

//task1
for (value=4;value>-1;value--) {
    console.log(i.children[value].innerText);
}

//creating element
let j=document.createElement('div')
j.className='class'
j.id='id'
console.log(j);

j.style.backgroundColor='red'
j.style.fontSize= '20px'
let k=document.createTextNode('mine')
j.appendChild(k)
document.body.appendChild(j)

//task2
let l=document.createElement('button')
l.className='btn'
l.id='btn'
console.log(l);

l.style.backgroundColor='green'
l.style.color='white'
let m=document.createTextNode('submit')
l.appendChild(m)
document.body.appendChild(l)

let n=document.getElementById('three')
n.append('hello')
document.body.append(n)













