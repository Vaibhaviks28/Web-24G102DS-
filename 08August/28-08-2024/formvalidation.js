function clearErros(){
    let error = document.getElementsByClassName('formerror')
    for(let item of error)
        {
            item.innerHTML = "";
        }
}

function seterror(id, error){
    let element = document.getElementById(id)
    element.getElementsByClassName('formerror')[0].innerHTML = error
}

function validatioForm(){
     returnval = true;
    clearErros();
    let name = document.forms['myForm']['name'].value
    if(name.length<5){
        seterror('name','*Name should be at least 5 characters long')
        returnval = false;
    }
    if(name.length==0){
        seterror('name','*Name is required')
        returnval = false;
    }
    let email = document.forms['myForm']['email'].value
    if(email.length>15){
        seterror('email','*Email length is too long')
        returnval = false;
    }
    let phone = document.forms['myForm']['phone'].value
    if(phone.length!=10){
        seterror('phone','*Phone number should be 10 digits')
        returnval = false;
    }
    let password = document.forms['myForm']['pass'].value
    if(password.length<6){
        seterror('pass','*Password should be atleast 6 characters')
        returnval = false;
    }
    let confirmPassword = document.forms['myForm']['cpass'].value
    if(confirmPassword!=password){
        seterror('cpass','*Password and Confirm Password should be match')
        returnval = false;
    }
    return returnval;
}