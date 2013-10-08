$(document).ready(function (){
    // animate logo
    $('html').hover(function (){
		$('#logoBack2').stop(true,false).animate({
            'left':'303px',
            'padding-left':'0px'
        },1000);
    });
    
    // animate navbar
    var bigHeight = 75;
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
});