$(document).ready(function(){
    
//Initiate Skollr//
        var s = skrollr.init();
    
 //Fade titlepage when scrolled//
    
$(window).scroll(function() {
    console.log($(document).scrollTop());
    if($(window).scrollTop() > 100) $('#titlepage').addClass('fade');
    if($(window).scrollTop() < 100) $('#titlepage').removeClass('fade');

})
    
//Prompt Dialogs//    
    
    did_accept_mission_1 = false;
    $(window).scroll(function() {
        if($(window).scrollTop() > 1300 && did_accept_mission_1 == false) {
            $('body').css('overflow-y', 'hidden');
        }

    })
    
    $('.accept_mission').click(function() {
        did_accept_mission_1 = true;
        $('body').css('overflow-y', '');
        $('.mission').fadeOut(500);
    })
    
    $('.quit_mission').click(function() {
        $(window).scrollTop(0);
        $('body').css('overflow-y', '');
    })
    
    
    did_accept_mission_2 = false;
    $(window).scroll(function() {
        if($(window).scrollTop() > 3350 && did_accept_mission_2 == false) {
            $('body').css('overflow-y', 'hidden');
        }

    })
    
    $('.keep_going').click(function() {
        did_accept_mission_2 = true;
        $('body').css('overflow-y', '');
        $('.turn_around').fadeOut(500);
    })
    
    $('.forget_this').click(function() {
        $(window).scrollTop(0);
        $('body').css('overflow-y', '');
    })
    
       did_accept_mission_3 = false;
    $(window).scroll(function() {
        if($(window).scrollTop() > 4799 && did_accept_mission_3 == false) {
            $('body').css('overflow-y', 'hidden');
        }

    })
    
    $('.pickup').click(function() {
        did_accept_mission_3 = true;
        $('body').css('overflow-y', '');
        $('.found_customer').fadeOut(500);
//        $('#scene1').fadeOut(1000);
    })
    
    $('.noway').click(function() {
        $(window).scrollTop(0);
        $('body').css('overflow-y', '');
    })
    
 // Scroll Position Indicator//
    
    $(window).scroll(function() {
        $('.scroll_indicator p').remove();

        px_from_top = $(window).scrollTop();
        $('.scroll_indicator').append("<p>"+ px_from_top + "px from top</p>");

        percent_from_top = Math.round($(window).scrollTop() / $(window).height() * 100);
        $('.scroll_indicator').append("<p>"+ percent_from_top + "% of vh from top</p>");

        percent_from_top = $('body').height() - $(window).scrollTop() - $(window).height();
        $('.scroll_indicator').append("<p>"+ percent_from_top + "px from bottom</p>");
    });

// Trigger a scroll to update info when page first loads//
    $(window).scroll();
 
//Ff page is refreshed in the middle of the way it will start at the beginning instead of freezing there//  
    
    setTimeout(function() {
        $(window).scrollTop(0);
        $('body').css('overflow-y', '');
    }, 500)
    
    //500 is the time it takes to allow scrolling again//
    
//Play audio based on scroll//
    setTimeout(function(){
    
    });
    
        var background = new AudioFade('#scrollaudio', 0, 9400, 400).init();

        var radio = new AudioFade('#scrollaudio1', 600, 700).init();
    
    
        var car = new AudioFade('#scrollaudio2', 1800, 4600, 200).init();
    
        var girl2 = new AudioFade('#scrollaudio3', 1960, 2060).init();
        var girl1= new AudioFade('#scrollaudio4', 3001, 3101).init();
        var girlbus = new AudioFade('#scrollaudio5', 2301, 2401).init();
        var girl3 = new AudioFade('#scrollaudio6', 3409, 3509).init();
            var rain = new AudioFade('#scrollaudio7', 3800, 4800, 200).init();
            var hospital = new AudioFade('#scrollaudio8', 4200, 4400).init();
            var rain2 = new AudioFade('#scrollaudio9', 6200, 9400, 200).init();
    
        var car2 = new AudioFade('#scrollaudio10', 6200, 9400, 200).init();
        var brake = new AudioFade('#scrollaudio11', 9300).init();
    

        
    
    
    
});