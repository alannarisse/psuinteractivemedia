
    //alert(document.querySelectorAll("#words path").length)
    let pathCount = document.querySelectorAll("#words path").length
    $('.anim-words').click(
      function(){
        $('#words path').addClass('anim-words').css('fill','green')
        
      }
    )
      let paths = $("#words path")

      paths.each(function(index) {
        paths[index] = $(this).css('animation-delay', `${index+1}00ms`)
        console.log(this)
      })