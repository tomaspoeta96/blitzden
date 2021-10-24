$i = "#a";
$difx = 80;
$($i).css("top",(2*$difx));
$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if( target.length ) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: target.offset().top}, 1000);
	}
});
$(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() <= ($(window).height())+$(".nosotros").height()) {
    	$($i).css("top",(2*$difx)+($(window).scrollTop()-$(window).height())*((($difx))/$(".nosotros").height()));    
    }
    else if($(window).scrollTop()>($(window).height())+$(".nosotros").height() && $(window).scrollTop() <= ($(window).height())+$(".nosotros").height()+$(".queHacemos").height()){
    	$($i).css("top",(3*$difx)+($(window).scrollTop()-($(window).height()+$(".nosotros").height()))*((($difx)+10)/$(".queHacemos").height()));    
    }
    else if($(window).scrollTop()>($(window).height())+$(".nosotros").height()+$(".queHacemos").height() && $(window).scrollTop() <= ($(window).height())+$(".nosotros").height()+$(".queHacemos").height()+$(".portfolio").height()){
    	$($i).css("top",(4*$difx)+10+($(window).scrollTop()-($(window).height()+$(".nosotros").height()+$(".queHacemos").height()))*((($difx)+20)/$(".portfolio").height()));    
    }
    else if($(window).scrollTop()>($(window).height())+$(".nosotros").height()+$(".queHacemos").height()+$(".portfolio").height() && $(window).scrollTop() <= ($(window).height())+$(".nosotros").height()+$(".queHacemos").height()+$(".portfolio").height()){
    	$($i).css("top",(5*$difx)+20+($(window).scrollTop()-($(window).height()+$(".nosotros").height()+$(".queHacemos").height()+$(".portfolio").height()))*((($difx))/$(".contacto").height()));    
    }
    else if($(window).scrollTop()>($(window).height()+$(".nosotros").height()+$(".queHacemos").height()+$(".portfolio").height())){
    	$($i).css("top",(5*$difx)+30);    
    }
    else{
    	$($i).css("top",(2*$difx));    
	}	
});