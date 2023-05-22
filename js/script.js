(function($) {

    "use strict";

    // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

    var initScrollNav = function() {
    	var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('#header-wrap').addClass("bg-white");
        }else{
          $('#header-wrap').removeClass("bg-white");
        }
	}
	
	// init jarallax parallax
	var initJarallax = function() {
	    jarallax(document.querySelectorAll(".jarallax"));

	    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
	      keepImg: true,
	    });
	}

	var initSwiper = function() {

		// product single page
		var thumb_slider = new Swiper(".product-thumbnail-slider", {
			slidesPerView: 3,
			direction: "vertical",
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
		});

		var large_slider = new Swiper(".product-large-slider", {
			slidesPerView: 1,
			spaceBetween: 10,
			effect: 'fade',
			thumbs: {
			  swiper: thumb_slider,
			},
		});
	}

	$(window).scroll(function() {    
	    initScrollNav();
	}); 

    $(document).ready(function() {
    	initChocolat();
    	initScrollNav();
    	initJarallax();
    	initSwiper();
    }); // End of a document

})(jQuery);