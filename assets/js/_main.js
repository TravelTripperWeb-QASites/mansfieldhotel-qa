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

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 60) {
		//clearHeader, not clearheader - caps H
		$(".navbar").addClass("resized");
	}else {
        $(".navbar").removeClass("resized");
    }
});