 // module pattern
 (function($) {
     $(document).ready(function() {


         // Skills Doughnuts
         var options = {
             responsive: true,
             hover: { mode: null },
             animation: {
                 animateScale: true,
                 animateRotate: true
             },
             tooltips: {
                 enabled: false
             }
         };

         var doughnutData1 = {
             datasets: [{
                 data: [
                     80,
                     20
                 ],
                 backgroundColor: [
                     '#FF6384',
                     '#e9f0f5'
                 ]
             }]
         };

         var doughnutData2 = {
             datasets: [{
                 data: [
                     60,
                     40
                 ],
                 backgroundColor: [
                     'rgb(255, 99, 132)',
                     '#e9f0f5'
                 ]
             }]
         };

         var doughnutData3 = {
             datasets: [{
                 data: [
                     40,
                     60
                 ],
                 backgroundColor: [
                     'rgb(255, 99, 132)',
                     '#e9f0f5'
                 ]
             }]
         };

         var doughnut1Chart = document.getElementById("chart-area-1").getContext("2d");
         var doughnut2Chart = document.getElementById("chart-area-2").getContext("2d");
         var doughnut3Chart = document.getElementById("chart-area-3").getContext("2d");

         //Projects carousel
         $('.owl-carousel').owlCarousel({
             items: 1,
             center: true,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
             rewind: true
         });

         /* 
          * Show more button is clicked
          */
         $('.show-more span').on('click', function() {
             var $this = $(this);
             var $content = $this.parent().prev('.hidden-content');
             $content.toggleClass('hide-content show-content');
             $this.find('i').toggleClass('fa-chevron-down fa-chevron-up');
             event.preventDefault();
         });

         /* Navbar link clicked */
         $('a[href^="#"]').on('click', function(event) {
             //Hide collapsable menu if need be
             if ($('.hamburger-nav').is(':visible')) {
                 $('#hamburger-nav').attr('checked', false);
             }
             var target = $($(this).attr('href'));
             if (target.length) {
                 event.preventDefault();
                 $('html, body').animate({
                     scrollTop: target.offset().top - $("#header").outerHeight(true)
                 }, 1000);
             }

         });

         // Set the body to the height of the sccreen.
         // This is important because on mobile devices,
         // the URL bar takes up space when scrolling.
         // This causes the body / divs set at 100% to 
         // adjust and make the page jumpy.
         var screenHeight = $(window).height();
         $('body').css('height', screenHeight + 'px');

         $(window).scroll(function() {

             /* Hide/Show the Header/Home if need be */
             if ($(this).scrollTop() > ($("#home").height()) / 4) {
                 $("#home-navbar").fadeOut(500, function() {});
                 $("#header").fadeIn(500, function() {});
             } else {
                 /* Don't show the home navbar on mobile devices */
                 if ($(this).width() > 945) {
                     $("#home-navbar").fadeIn(500, function() {});
                 }
                 $("#header").fadeOut(500, function() {});
             }



             /* Change the selected navbar link when the section is scrolled into view */
             var scrollPosition = $(this).scrollTop();
             var headerHeight = $("#header").outerHeight(true);
             var scrollOffset = $(window).height() / 4;

             $('#header nav a[href^="#"]').each(function() {
                 var thisHref = $($(this).attr('href'));
                 var thisHrefTopPosition = $(thisHref).offset().top;
                 var thisPosition = thisHrefTopPosition - headerHeight - scrollOffset;

                 if (scrollPosition >= thisPosition) {
                     $('.selectedNavItem').removeClass('selectedNavItem');
                     $(this).addClass('selectedNavItem');
                 }
             });


             /* load skill graphs when in view */
             var scrollBottom = $(window).scrollTop() + $(window).height();
             var chart1BottomPos = $('#chart-area-1').offset().top + $('#chart-area-1').outerHeight(true);
             if (scrollBottom >= chart1BottomPos) {
                 if (!window.doughnut1) {
                     window.doughnut1 = new Chart(doughnut1Chart, { type: 'doughnut', data: doughnutData1, options: options });
                 }
             }

             var chart2BottomPos = $('#chart-area-2').offset().top + $('#chart-area-2').outerHeight(true);
             if (scrollBottom >= chart2BottomPos) {
                 if (!window.doughnut2) {
                     window.doughnut2 = new Chart(doughnut2Chart, { type: 'doughnut', data: doughnutData2, options: options });
                 }
             }

             var chart3BottomPos = $('#chart-area-3').offset().top + $('#chart-area-3').outerHeight(true);
             if (scrollBottom >= chart3BottomPos) {
                 if (!window.doughnut3) {
                     window.doughnut3 = new Chart(doughnut3Chart, { type: 'doughnut', data: doughnutData3, options: options });
                 }
             }

         });
     });
 }(jQuery));
