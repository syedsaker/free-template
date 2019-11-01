(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

	                // START MENU JS
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 100) {
                        $('.navbar-light').addClass('menu-shrink');
                    } else {
                        $('.navbar-light').removeClass('menu-shrink');
                    }
                });			
                  
                $('.navbar-nav .nav-item .nav-link').on('click', function(e){
                    var anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $(anchor.attr('href')).offset().top - 70
                    }, 1500);
                    e.preventDefault();
                });
               
                $(document).on('click','.navbar-collapse.show',function(e) {
                    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                        $(this).collapse('hide');
                    }
                });	
                // END MENU JS
	
	
	
        // Home Slider JS
        $('.test-slider').owlCarousel({
            items:1,
            loop:false,
            margin:10,
            nav: false,
            dots: true,
          
        })

     
  
    }); 	



  

       



})(jQuery);