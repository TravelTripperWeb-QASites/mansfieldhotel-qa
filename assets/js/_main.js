/*
   jQuery plugin settings and other scriptds
   ========================================================================== */

$(document).ready(function () {

	// FitVids init
	$("#main").fitVids();

	// init smooth scroll
	$("a").smoothScroll({
		offset: -20
	});
	
	//homeBannercarousel
	$('.carousel').carousel();

	$('#carouselHomebanner .carousel-item').css('max-height', window.innerHeight - 90);

});
