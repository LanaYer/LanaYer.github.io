var need_height = $(window).height()-135;

$(window).scroll(function() {
	if ($(window).scrollTop() > need_height) {
	    $("#block-header").css({display: 'block'});
	}
	else {
		$("#block-header").css({display: 'none'});
	}
});	
	
$( document ).ready(function() {
 
	$('.block-portfolio-show_more-a').on('click',function () {
        $('.block-portfolio-show_more').show();
		$('.block-portfolio-show_more-a').hide();
    });
	$('.block-portfolio-hide_more-a').on('click',function () {
		$('.block-portfolio-show_more').hide();
		$('.block-portfolio-show_more-a').show();
    });	
});



	
 
 