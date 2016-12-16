 // module pattern
 (function ($) {

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
	
	
	$(document).ready(function(){
  	
  		// Set the body to the height of the sccreen.
  		// This is important because on mobile devices,
  		// the URL bar takes up space when scrolling.
  		// This causes the body / divs set at 100% to 
  		// adjust and make the page jumpy.
	  	var screenHeight = $(window).height();
		$('body').css('height', screenHeight + 'px');
	
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
	
			var scrollPosition	= $(this).scrollTop();
			var headerHeight = $("#header").outerHeight(true);
			var scrollOffset = $( window ).height()/4;
			
		 	$('#header nav a[href^="#"]').each(function() {
				var thisHref = $( $(this).attr('href') );
				var thisHrefTopPosition = $(thisHref).offset().top;
				var thisPosition = thisHrefTopPosition - headerHeight - scrollOffset;
		
				if(scrollPosition >= thisPosition) {
					$('.selectedNavItem').removeClass('selectedNavItem');
					$(this).addClass('selectedNavItem');
				}
			});
		});
	});
 }(jQuery));