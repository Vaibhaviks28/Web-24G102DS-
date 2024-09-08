// document.getElementById('one') //in js
// $('#one')                       //in jquery

// $(document).ready(function(){
//     alert('done')
// });

// $(function(){
//     let a=$('#one').html();
//     console.log(a);
// })

// $(document).ready(function(){
//     // $('#list').css('color','red')
//     // $('#list li').css('border','2px solid blue')
//     // $('*').css('border','2px solid blue')
//     // $('li:first').css('border','2px solid blue')
//     // $('li:first-child').css('border','2px solid blue')
//     // $('li:last').css('border','2px solid blue')
//     // $('ul li').css('border','2px solid blue')
//     // $('ul li:eq(2)').css('border','2px solid blue')
//     // $('ul li:gt(2)').css('border','2px solid blue')
//     // $('ul li:lt(2)').css('border','2px solid blue')
    
// })

$(document).ready(function(){
    $('body').keypress(function(){
        $(this).css('background-color','green')
    }) 
})