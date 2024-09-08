let flag=true
while(flag)
{
    let value=prompt("Enter a value to see is it truthly or falsly value in js")
    if(Number(value)!=NaN && (value<1 &&value>-1)){
        value=0;
    }
    if(value=="false"||value=='" "'||value=="null"||value=="undefined"||value=="0"){
        alert(`yes, ${value} is falsly value in js`)
    }
    else{
        alert(`No, ${value} is truly value in js`)
    }

    flag=confirm("do you want to check more values?")
    

}