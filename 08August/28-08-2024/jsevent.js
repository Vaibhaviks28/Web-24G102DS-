// document.getElementById('two').ondblclick=function(){
//     alert('done')
// }

// document.getElementById("two").addEventListener('click',function(){
//     alert('done');
// })

// document.getElementById('image').
// addEventListener('click',function(e){
//     console.log('clicked inside image');
//     // e.stopPropagation();
// },true)


// document.getElementById('two').
// addEventListener('click',function(e){
//     console.log('clicked inside two image');
//     // e.preventDefault();
// }) 

// document.getElementById('YT').
// addEventListener('click',function(e){
//    e.preventDefault()
//     console.log('clicked inside image');
// })

// document.querySelector('#image').addEventListener('click',function(){
//      console.log(e.target.parentNode);
//     // console.log(e.tagName);
//     // console.log(e.target);
//     // console.log(e);
// })

document.querySelector('#image').addEventListener('click', function(e){
    let one = e.target.parentNode
    one.parentNode.removeChild(one)
})