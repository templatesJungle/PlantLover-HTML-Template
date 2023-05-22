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

	var initIncrementButton = function() {

	    $('.spin-number-output').each(function(){

	      // quantity number//
	      let spinNumberOutput = document.querySelector('.spin-number-output');
	      let regularPrice = document.querySelector('.regular-price');
	      let quantityOutput = document.querySelector('.quantity-output');
	      let plusButton = document.querySelector('.incriment-button');
	      let minusButton = document.querySelector('.decriment-button');

	      spinNumberOutput.value = 1;
	      quantityOutput.innerHTML = '$' + regularPrice.innerHTML * spinNumberOutput.value

	      plusButton.addEventListener('click', function(){
	          spinNumberOutput.value ++
	          // console.log( quantityOutput.innerHTML = regularPrice.innerHTML * spinNumberOutput.value)
	      })

	      minusButton.addEventListener('click', function(){

	        if( spinNumberOutput.value > 1){
	         spinNumberOutput.value--
	        // console.log( quantityOutput.innerHTML = regularPrice.innerHTML * spinNumberOutput.value)

	         }
	      })
	      
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
    	initIncrementButton();

    }); // End of a document

})(jQuery);