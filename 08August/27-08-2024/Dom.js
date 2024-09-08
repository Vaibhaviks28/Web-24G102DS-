let a=document.createElement("h2")
let b=document.createTextNode("mine")
a.appendChild(b)
let c =document.getElementById("two")
// c.insertBefore(a,c.childNodes[0])
c.insertBefore(a,c.childNodes[3])


