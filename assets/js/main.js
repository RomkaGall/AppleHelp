$(document).ready(function() {
	console.log("Скрипты подъехали")

	$('.slider--delivery').slick({
		slidesToShow: 6,
		centerMode: true,
		slidesToScroll: 3,
		arrow: false,
		responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 4,
	       slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 840,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	       
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	       
	      }
	    },
	    ]
	});

	$('.slider--video').slick({
		slidesToShow: 2,
		infinite:false,
		prevArrow: '.slider__btn--prev',
		nextArrow: '.slider__btn--next',
		responsive: [
	    {
	      breakpoint: 1560,
	      settings: {
	        slidesToShow: 1,
	       slidesToScroll: 1,
	       centerMode: true,
	      }
	    },
	    
	    ]
	});

	$(function () {
		$('.close').click(function () {
			$('.popup').fadeOut();
		});

		$('.whole').click(function () {
			$('.popup').fadeIn();
		});

		$(document).on('click', function(e) {
		  if (!$(e.target).closest('.download__wr').length && !$(e.target).closest('.whole').length) {
		    $('.popup').fadeOut();
		  }

		  e.stopPropagation();
		});
	});

	$(function () {
		 $('.download__text .input').mask('+7(000) 000-00-000', {placeholder: "+7(xxx) xxx xx xx"});
	})	



});