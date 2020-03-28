$(function (){

	$(".first").click(function(){
		$(".one").show();
		$(".two").hide();
	});

	$(".second").click(function(){
		$(".two").show();
		$(".one").hide();
	});

	$(window).scroll(function (){
		var scroll = $(this).scrollTop();
		if(scroll > 500)
		{
			$(".mu").slideDown();
		}

		else
		{
			$(".mu").slideUp();
		}	
	});

	$('.one').css('display','block');
    
    $('div.acordion h3').click(function(){
        
        $(this).next().slideToggle();
        $("div.acordion p").not($(this).next()).slideUp();
        
        
    });

    $(".timer").countTo(4000);

    $("body").niceScroll();
     
    
 

});