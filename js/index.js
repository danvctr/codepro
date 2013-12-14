$(document).ready(function (){
    // animate logo
    $('html').hover(function (){
        $('#logoBack2').stop(true,false).animate({
            'left':'303px',
            'padding-left':'0px'
        },1000);
    });

    // animate navbar
    /* var bigHeight = 75;
     var smallHeight = 50;
     $(".navButton").css("line-height", smallHeight+"px");
     $('.navButton').mouseenter(function() {
     $(this).stop().animate({
     'height': bigHeight+"px",
     "line-height": bigHeight+"px"
     });
     });
     $('.navButton').mouseleave(function() {
     $(this).stop().animate({
     'height': smallHeight+"px",
     "line-height": smallHeight+"px"
     });
     });
     $('#buzzWord').css({"font-size": ($('#buzzWord').height()*.50) + 'px'});
     var sectionHeight = $('section').height();
     var pageOneHeight = (sectionHeight - 100) + 'px';*/

    //Setting Variables in css for responsive divs//
    $('#slogan').css({height: ($(window).height()-150)*.20});
    $('#slider').css({height: ($(window).height()-150)*.80});
    $('.subPages').css({height: ($(window).width()) *0.3251748251748252});

    $(window).resize(function(){
        $('#slogan').css({height: ($(window).height()-150)*.20});
        $('#slider').css({height: ($(window).height()-150)*.80});
        $('.subPages').css({height: ($(window).width()) *0.3251748251748252});

    });
    ////////////////////////////////////////////////

    //Scroll animation for 3 subpages//
    $(window).scroll(function () {
        var targetOneScroll = ($('#target1').offset().top);
        var targetTwoScroll = ($('#target2').offset().top);
        var targetThreeScroll = ($('#target3').offset().top);
        var windowScroll = ($(window).scrollTop() + $(window).height());

        if ($(window).scrollTop() > 150) {
            $("#navBarCont").css({"position": "fixed", "top": 0, "left": 0});
            $("#navBarCont").slideDown(500);
            // hasNavBarPopped = true;
        } else {
            $("#navBarCont").css({"position": "static"});
            $("#navBarCont").slideDown(500);
        }

        if (windowScroll > targetOneScroll ){
            $("#word1").css({"margin-top": "5%", "opacity": 1});
            $("#wordButton1").css({"margin-top": 0, "opacity": 1});
            $("#pic1").css({"margin-right": "-7.5%"});
        } else{
            $("#word1").css({"margin-top": 0, "opacity": 0});
            $("#wordButton1").css({"margin-top": "-50%", "opacity": 0});
            $("#pic1").css({"margin-right": "-20%"});
        }
        if (windowScroll > targetTwoScroll ){
            $("#word2").css({"margin-top": "5%", "opacity": 1});
            $("#wordButton2").css({"margin-top": 0, "opacity": 1});
            $("#pic2").css({"margin-left": "-3.5%"});
        } else{
            $("#word2").css({"margin-top": 0, "opacity": 0});
            $("#wordButton2").css({"margin-top": "-50%", "opacity": 0});
            $("#pic2").css({"margin-left": "-20%"});
        }

        if (windowScroll > targetThreeScroll ){
            $("#word3").css({"margin-top": "5%", "opacity": 1});
            $("#wordButton3").css({"margin-top": 0, "opacity": 1});
            $("#pic3").css({"margin-right": "-7.5%"});

        }else{
            $("#word3").css({"margin-top": 0, "opacity": 0});
            $("#wordButton3").css({"margin-top": "-50%", "opacity": 0});
            $("#pic3").css({"margin-right": "-20%"});
        }
    });
    //////////////////////////////////////////////////////////////////////

    // FitText logic
    $("#slogan").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });

    // animate footer opacity
    $('footer').mouseenter(function() {
        $(this).stop().animate({
            'opacity':'1'
        }, "fast");
    });
    $('footer').mouseleave(function() {
        $(this).stop().animate({
            'opacity':'.4'
        }, "fast");
    });

    $("#slider").nerveSlider({
        sliderWidth: "100%",
        sliderHeight: "100%",
        startOnSlide: 1
    });

    $("#slogan").fitText(1.2, {
         minFontSize: '20px',
         maxFontSize: '40px' 
    });
});
