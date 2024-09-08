// $(document).ready(function(){
//     $('#two').animate({
//         opacity:0.4,
//         fontSize:"20px",
//         height:'350px'
//     },3000)
//  })


//------------------------------------------------


// $(document).ready(function(){
//     $('#two').animate({
//         opacity:0.4,
//     },3000)
//     $('#two').animate({
//         fontSize:"20px",
//     },3000)
//     $('#two').animate({
//       height:'350px'
//     },3000)
//  })

//---------------------------------------------------------

$(document).ready(function(){
  $('new').click(function(){
    $('#two').animate(
        {
            fontSize:'40px'
        }
    )
  })
//   $('old').click(function(){
//     // $('#two').stop()
//     $('#two').stop(true)
//   })

//   $('old').click(function(){
//     $('#two').empty()
//   })

//   $('old').click(function(){
//     $('#two').text('mine mine mine')
//   })

  $('old').click(function(){
    $('#two').remove()
  })
 })