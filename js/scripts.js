// toggle visibility for css3 animations


//iphone carousel animation
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').css('z-index', '999');
		$('.navbar-default').addClass('fixed-to-top');

	} else if (scrollTop == 0)   {

		$('.navbar-default').removeClass('fixed-to-top');
	}

});


// Parallax Content

function parallax() {

		// Turn parallax scrolling off for iOS devices

		    var iOS = false,
		        p = navigator.platform;

		    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		        iOS = true;
		    }

		var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('.payoff').css('background-position-y', scaleBg - 150);
            $('.social').css('background-position-y', scaleBg + 200);
        }

}

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}

}

$(document).ready(function () {

	var browserWidth = $(window).width();

	if (browserWidth > 560){

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}

});


$(window).resize(function () {

	var browserWidth = $(window).width();

	if (browserWidth > 560){

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}
});


// iPhone Header Carousel
$('header .carousel').carousel({
  interval: 3000
})

// iPhone Features Carousel
$('.detail .carousel').carousel({
  interval: 4000
})
