let fname=document.createElement("h2");
let fnametxt=document.createTextNode("vaibhavi")
fname.appendChild(fnametxt)

let email=document.createElement("h2");
let emailtxt=document.createTextNode("vai@gmail.com")
email.appendChild(emailtxt)

let lname=document.getElementById("task");
let lnametxt=document.createTextNode("kshirsagar");
lname.appendChild(lnametxt);

document.body.insertBefore(fname,lname)

let btn=document.createElement("button")
let btnt=document.createTextNode("submit")
btn.appendChild(btnt)
document.body.appendChild(btn)

document.body.insertBefore(email,btn)
