var need_height = $(window).height()-135;

function followCursor () {
    const el = document.querySelector('#follow');

    addEventListener('mousemove', (e) => {
        const target = e.target; // определяем, где находится курсор
    		if (!target) return;

    	el.style.left = e.pageX - 30 + 'px'; // задаём элементу позиционирование слева
    	el.style.top = e.pageY - 10 + 'px'; // задаём элементу позиционирование сверху
	});
}

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

    followCursor() // вызываем функцию followCursor
});



	
 
 