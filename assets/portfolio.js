$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - $("#header").outerHeight(true)
        }, 1000);
    }

});

(function ($) {
  $(document).ready(function(){
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > ($("#top").height())/4) {
				$("#top-navbar").fadeOut(500, function(){});
				$("#header").fadeIn(500, function(){});
			} else {
				$("#top-navbar").fadeIn(500, function(){});
				$("#header").fadeOut(500, function(){});
			}
		});

	
	});

});
  }(jQuery));