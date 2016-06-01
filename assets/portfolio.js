
/* Navbar link clicked */
$('a[href^="#"]').on('click', function(event) {
	 //Hide collapsable menu if need be
    if($('.hamburger-nav').is(':visible')) {
    	$('#hamburger-nav').attr('checked', false);
	}
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

			/* Hide/Show the Header/Home if need be */
			if ($(this).scrollTop() > ($("#top").height())/4) {
				$("#home-navbar").fadeOut(500, function(){});
				$("#header").fadeIn(500, function(){});
			} else {
				/* Don't show the home navbar if the screen width is greater than 945 */
				if($(this).width() > 945){
					$("#home-navbar").fadeIn(500, function(){});
				}
				$("#header").fadeOut(500, function(){});
			}

			/* Change the selected navbar link when the section is scrolled into view */

			scrollPosition	= $(this).scrollTop();
			headerHeight = $("#header").outerHeight(true);
			scrollOffset = $( window ).height()/4;
		 	$('#header nav a[href^="#"]').each(function() {
	
				thisHref = $( $(this).attr('href') );
				thisHrefTopPosition = $(thisHref).offset().top;
				thisPosition = thisHrefTopPosition - headerHeight - scrollOffset;
				
				if(scrollPosition >= thisPosition) {

					$('.selectedNavItem').removeClass('selectedNavItem');
					$(this).addClass('selectedNavItem');

				}
			});
		});	
		
	});

});
 }(jQuery));