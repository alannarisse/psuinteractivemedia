
 //   <!-- Custom jQuery --> Remove // to add to html
    
 //   <script>
        $(document).ready(function() {
            
            var menulink = $('.scroll');
            
            // Slow Your Scroll
                menulink.click(function(event) {
                    event.preventDefault();
                    $('body,html').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 1000 );
                    
                });
            
            // change active link highlight
        $(window).scroll(function() {
            
            var menuLocation = $(this).scrollTop();
            
                menulink.each(function() {
                    
                    var sectionOffset = $(this.hash).offset().top - 20;
                
                if (sectionOffset <= menuLocation){
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
                })
            
        })    
            
        })
    
 //   </script>
  
  